from django.db import models
from django.utils.translation import gettext_lazy as _

# Create your models here.
class Record(models.Model):
    class Choices(models.TextChoices):
        CHOICE_1 = "CHOICE_1", _("Choice 1")
        CHOICE_2 = "CHOICE_2", _("Choice 2")
        CHOICE_3 = "CHOICE_3", _("Choice 3")

    choice = models.CharField(
        max_length=9,
        choices=Choices.choices,
        default=Choices.CHOICE_1,
    )
    text = models.TextField()

    @property
    def choice_label(self):
        """Get choice label"""
        return self.get_choice_display()

    def __str__(self):
        return self.id
