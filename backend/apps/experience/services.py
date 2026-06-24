from apps.experience.repositories import ExperienceRepository

class ExperienceService:
    def __init__(self):
        self.repository = ExperienceRepository()

    def get_experiences(self):
        return self.repository.get_all_active()
