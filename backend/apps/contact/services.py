import hashlib
from apps.contact.repositories import ContactRepository, ResumeDownloadRepository

def hash_ip(ip_address):
    if not ip_address:
        return ""
    # Simple salt to comply with hashing guidelines
    salt = "ganga_portfolio_ip_salt_2026"
    return hashlib.sha256((ip_address + salt).encode('utf-8')).hexdigest()


class ContactService:
    def __init__(self):
        self.repository = ContactRepository()

    def submit_message(self, name, email, message, ip_address):
        ip_hash = hash_ip(ip_address)
        return self.repository.create_message(
            name=name,
            email=email,
            message=message,
            ip_hash=ip_hash
        )


class ResumeDownloadService:
    def __init__(self):
        self.repository = ResumeDownloadRepository()

    def track_download(self, session_id, ip_address, country=None, city=None):
        ip_hash = hash_ip(ip_address)
        return self.repository.create_download(
            session_id=session_id,
            ip_hash=ip_hash,
            country=country,
            city=city
        )
