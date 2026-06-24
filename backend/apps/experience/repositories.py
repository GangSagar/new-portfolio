from apps.experience.models import Experience

class ExperienceRepository:
    @staticmethod
    def get_all_active():
        return Experience.objects.filter(is_active=True).prefetch_related('technologies').order_by('display_order', '-start_date')
