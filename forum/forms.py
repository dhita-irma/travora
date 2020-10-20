from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm


# Form that inherit from UserCreationFrom
class UserRegisterForm(UserCreationForm):
    first_name = forms.CharField(max_length=24)
    last_name = forms.CharField(max_length=24)
    email = forms.EmailField()
    
    class Meta:
        model = User   # Form is going to be saved in this model 
        fields = ['first_name', 'last_name', 'username', 'email', 'password1', 'password2'] # Fields that are going to be displayed