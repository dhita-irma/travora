from django.db.models.signals import post_save
from django.contrib.auth.models import User  
from django.dispatch import receiver
from .models import Profile


# Automatically create User Profile for each User created 
@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    print(f"sender={sender}, instance={instance}, created={created}")
    if created:
        Profile.objects.create(user=instance)
        print("Created profile")

# Save Profile every time the user object get saved 
@receiver(post_save, sender=User)
def save_profile(sender, instance, **kwargs):
    print(f"sender={sender}, instance={instance}")
    instance.profile.save()