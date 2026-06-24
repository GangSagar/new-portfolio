from apps.achievements.models import Achievement, Certification

class AchievementRepository:
    @staticmethod
    def get_all_active():
        return Achievement.objects.filter(is_active=True).order_by('display_order', '-created_at')


class CertificationRepository:
    @staticmethod
    def get_all_active():
        return Certification.objects.filter(is_active=True).order_by('display_order', '-issue_date')
