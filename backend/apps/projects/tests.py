from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from apps.projects.models import Project, Technology, ProjectMetric
from apps.skills.models import Skill
from apps.experience.models import Experience
from apps.contact.models import ContactMessage
from apps.analytics.models import AnalyticsEvent
import uuid

class PortfolioAPITests(APITestCase):

    def setUp(self):
        # Seed test database entries
        self.tech = Technology.objects.create(
            name="Python",
            slug="python",
            category="Languages"
        )
        self.project = Project.objects.create(
            title="Test Project",
            slug="test-project",
            short_description="Short desc",
            full_description="Full desc",
            featured=True,
            display_order=1
        )
        self.project.technologies.add(self.tech)
        self.metric = ProjectMetric.objects.create(
            project=self.project,
            metric_name="Latency",
            metric_value="100ms"
        )
        self.skill = Skill.objects.create(
            name="Django",
            category="backend",
            years_of_experience=2
        )
        self.experience = Experience.objects.create(
            company_name="Test Company",
            role="Engineer",
            employment_type="Full-Time",
            start_date="2024-01-01"
        )

    def test_health_check(self):
        url = reverse('health-check')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        # Note: Health check does not use DRF renderer and returns plain JSON
        self.assertEqual(response.json(), {"status": "healthy"})

    def test_get_projects(self):
        url = reverse('project-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        res_data = response.json()
        self.assertTrue(res_data['success'])
        self.assertEqual(res_data['message'], "Request completed successfully")
        self.assertEqual(len(res_data['data']), 1)
        self.assertEqual(res_data['data'][0]['title'], "Test Project")
        self.assertEqual(res_data['data'][0]['technologies'][0]['name'], "Python")

    def test_get_project_by_slug(self):
        url = reverse('project-detail', kwargs={'slug': 'test-project'})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        res_data = response.json()
        self.assertTrue(res_data['success'])
        self.assertEqual(res_data['data']['title'], "Test Project")

    def test_get_skills(self):
        url = reverse('skill-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        res_data = response.json()
        self.assertTrue(res_data['success'])
        self.assertEqual(len(res_data['data']), 1)

    def test_get_experience(self):
        url = reverse('experience-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        res_data = response.json()
        self.assertTrue(res_data['success'])
        self.assertEqual(len(res_data['data']), 1)

    def test_submit_contact_message(self):
        url = reverse('contact-list')
        data = {
            "name": "Jane Doe",
            "email": "jane@example.com",
            "message": "Hello Ganga!"
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        res_data = response.json()
        self.assertTrue(res_data['success'])
        self.assertEqual(res_data['message'], "Message submitted successfully")
        self.assertEqual(ContactMessage.objects.count(), 1)
        self.assertEqual(ContactMessage.objects.first().name, "Jane Doe")

    def test_submit_contact_message_validation_fail(self):
        url = reverse('contact-list')
        data = {
            "name": "",
            "email": "invalid-email",
            "message": "Hello"
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        res_data = response.json()
        self.assertFalse(res_data['success'])
        self.assertEqual(res_data['message'], "Validation failed")
        self.assertIn('email', res_data['errors'])

    def test_log_analytics_event(self):
        url = reverse('analytics-event-list')
        data = {
            "event_name": "resume_download",
            "page": "/resume",
            "metadata": {"version": "v1.0"}
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        res_data = response.json()
        self.assertTrue(res_data['success'])
        self.assertEqual(AnalyticsEvent.objects.count(), 1)
