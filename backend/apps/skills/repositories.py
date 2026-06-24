from apps.skills.models import Skill

class SkillRepository:
    @staticmethod
    def get_all_active(category=None):
        queryset = Skill.objects.filter(is_active=True)
        if category:
            queryset = queryset.filter(category=category)
        return queryset.order_by('display_order', 'name')
