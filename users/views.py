from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.shortcuts import render, redirect
from django.urls import reverse

from .forms import UserRegisterForm


def register(request):
    if request.method == 'POST':
        # Create an instance and populate it with form data
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f'Account created for {username}!')
            return redirect(reverse('index'))

    else:
        # Create an instance of an empty form
        form = UserRegisterForm()
    return render(request, 'users/register.html', {'form': form})


def login_view(request):
    if request.method == "POST":

        # Attempt to sign user in
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return redirect(reverse("index"))
        else:
            return render(request, "forum/login.html", {
                "message": "Invalid username and/or password."
            })
    else:
        return render(request, "forum/login.html")


def logout_view(request):
    logout(request)
    return redirect(reverse("index"))