import hashlib
import logging
from django.core.mail import send_mail
from django.conf import settings
from apps.contact.repositories import ContactRepository, ResumeDownloadRepository

logger = logging.getLogger(__name__)

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
        msg = self.repository.create_message(
            name=name,
            email=email,
            message=message,
            ip_hash=ip_hash
        )

        try:
            subject = f"Portfolio Contact Form: {name}"
            body = (
                f"You have received a new message from your portfolio contact form:\n\n"
                f"Name: {name}\n"
                f"Email: {email}\n\n"
                f"Message:\n{message}\n"
            )
            send_mail(
                subject=subject,
                message=body,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.NOTIFY_EMAIL],
                fail_silently=False,
            )
        except Exception as e:
            logger.error(f"Error sending contact email notification: {e}")

        return msg


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
