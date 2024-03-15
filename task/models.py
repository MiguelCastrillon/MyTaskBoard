from django.db import models

class Task(models.Model):
    title = models.CharField(max_length=250)
    description = models.CharField(max_length=1000)
    icon = models.CharField(max_length=100)
    status = models.CharField(default=None, max_length=100)

    def __str__(self):
        return self.title
