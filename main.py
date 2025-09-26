import hashlib
import time
from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import io
import logging

# --- Cache and Versioning ---
# 本来はRedisなどの外部キャッシュストアを使用することを推奨します。
# 今回は簡易的にインメモリの辞書をキャッシュとして使用します。
CACHE = {}
MODEL_VERSION = "1.0.1"  # AIモデルやロジック更新時にバージョンを上げます

# --- Logging Setup ---
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# --- FastAPI App ---
app = FastAPI()

# --- CORS Middleware ---
# フロントエンドからのアクセスを許可します
origins = [
    "http://localhost:3000",  # 開発環境
    "http://127.0.0.1:3000",
    # 本番環境のドメインを追加してください
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_image_hash(image_bytes: bytes) -> str:
    """画像のバイトデータからSHA256ハッシュを計算します。"""
    return hashlib.sha256(image_bytes).hexdigest()

def analyze_image_deterministically(image_hash: str) -> dict:
    """
    決定論的な画像分析を実行するダミー関数。
    画像のハッシュ値のみを使い、常に同じ結果を返します。
    乱数や外部の状態に依存する処理は含めません。
    """
    logger.info(f"Running deterministic analysis for hash: {image_hash[:10]}...")

    # AIモデルの処理時間を模倣
    time.sleep(2)

    # ハッシュ値を数値に変換して、それを元に固定的なスコアを算出
    # これにより、同じハッシュ値からは常に同じ結果が得られます
    hash_as_int = int(image_hash, 16)

    score = (hash_as_int % 41) + 60  # 60-100の範囲のスコア
    ctr = (hash_as_int % 501) / 1000 + 1.0 # 1.000% - 1.500% の範囲のCTR

    if score >= 90:
        grade = "A"
    elif score >= 75:
        grade = "B"
    else:
        grade = "C"

    result = {
        "score": score,
        "predicted_ctr": round(ctr, 3),
        "grade": grade,
        "model_version": MODEL_VERSION,
        "cached": False
    }
    logger.info(f"Analysis complete: {result}")
    return result

@app.post("/analyze")
async def analyze_banner(file: UploadFile = File(...)):
    """
    バナー画像をアップロードして分析結果を取得するエンドポイント。
    """
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="無効なファイル形式です。画像ファイルをアップロードしてください。")

    image_bytes = await file.read()

    # 画像として有効か簡易チェック
    try:
        Image.open(io.BytesIO(image_bytes))
    except Exception:
        raise HTTPException(status_code=400, detail="画像ファイルを開けませんでした。")

    # 画像のハッシュ値を計算
    image_hash = get_image_hash(image_bytes)
    logger.info(f"Received image. Hash: {image_hash[:10]}..., Version: {MODEL_VERSION}")


    # キャッシュキーを作成 (画像ハッシュ + モデルバージョン)
    cache_key = f"{image_hash}:{MODEL_VERSION}"

    # キャッシュを確認
    if cache_key in CACHE:
        logger.info(f"Cache hit for key: {cache_key[:15]}...")
        cached_result = CACHE[cache_key]
        cached_result["cached"] = True
        return cached_result

    logger.info("Cache miss. Running new analysis.")
    # キャッシュがない場合、決定論的な分析を実行
    analysis_result = analyze_image_deterministically(image_hash)

    # 結果をキャッシュに保存
    CACHE[cache_key] = analysis_result.copy() # copy()で参照を分離

    return analysis_result

@app.get("/")
def read_root():
    return {"status": "Banasco Analysis API is running."}
