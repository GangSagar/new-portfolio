from apps.skills.repositories import SkillRepository

class SkillService:
    def __init__(self):
        self.repository = SkillRepository()

    def get_skills(self, category=None):
        return self.repository.get_all_active(category=category)
