from django.shortcuts import render, redirect
from .models import Categoria, Postit
from .forms import PostItForm

def index (request):
    form = PostItForm()
    if request.method == 'POST':
        form = PostItForm(request.POST)
        if form.is_valid():
            form.save()
            form = PostItForm()
    context={
        'form': form
    }
    return render(request, 'index.html', context)