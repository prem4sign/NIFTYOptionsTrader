"""Placeholder FyersService.

Reads required configuration from environment variables:
  - FYERS_CLIENT_ID
  - FYERS_SECRET_KEY
  - FYERS_REDIRECT_URI

This is intentionally minimal and does not implement OAuth or market data yet.
"""
import os
from typing import Optional


class FyersService:
    def __init__(self) -> None:
        self.client_id: Optional[str] = os.getenv("FYERS_CLIENT_ID")
        self.secret_key: Optional[str] = os.getenv("FYERS_SECRET_KEY")
        self.redirect_uri: Optional[str] = os.getenv("FYERS_REDIRECT_URI")

    def is_configured(self) -> bool:
        """Return True if all required env variables are present."""
        return bool(self.client_id and self.secret_key and self.redirect_uri)

    def get_config(self) -> dict:
        """Return a non-secret summary of configuration for debugging."""
        return {
            "client_id_present": bool(self.client_id),
            "redirect_uri": self.redirect_uri,
        }
