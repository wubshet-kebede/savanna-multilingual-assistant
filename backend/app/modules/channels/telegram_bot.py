import os
import asyncio

async def run_telegram_bot():
    token = os.getenv("TELEGRAM_BOT_TOKEN", "")
    if not token:
        print("[Telegram Bot Module] Waiting for TELEGRAM_BOT_TOKEN environment variable...")
        return
    print(f"[Telegram Bot Module] Initialized on token {token[:6]}...")

if __name__ == "__main__":
    asyncio.run(run_telegram_bot())
