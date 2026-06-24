from apps.contact.models import ContactMessage, ResumeDownload

class ContactRepository:
    @staticmethod
    def create_message(name, email, message, ip_hash):
        return ContactMessage.objects.create(
            name=name,
            email=email,
            message=message,
            ip_hash=ip_hash
        )


class ResumeDownloadRepository:
    @staticmethod
    def create_download(session_id, ip_hash, country=None, city=None):
        return ResumeDownload.objects.create(
            session_id=session_id,
            ip_hash=ip_hash,
            country=country,
            city=city
        )
