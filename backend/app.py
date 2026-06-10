"""
Minimal FastAPI backend for NIFTY Options Trader

Run (development):
    pip install -r requirements.txt
    uvicorn app:app --reload

This app exposes a health endpoint and sets up CORS for the frontend.
"""
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

from fyers_service import FyersService

load_dotenv()

app = FastAPI(title="NIFTY Options Trader - Backend")

# Allowed origins for CORS (frontend hosts)
ALLOWED_ORIGINS = [
    "https://nifty-options-trader.vercel.app",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize the Fyers service (placeholder)
fyers_service = FyersService()


@app.get("/health")
def health():
    """Health check endpoint."""
    return {"status": "ok"}
