from django.shortcuts import render, redirect
from .models import Categoria, Postit
from .forms import PostItForm

def index (request):
    PostIfform = PostItForm()
    if request.method == 'POST':
        PostIfform = PostItForm(request.POST)
        if PostIfform.is_valid():
            PostIfform.save()
            PostIfform = PostItForm()
    #if request.method == 'DELETE'
        
    context={
        'form': PostIfform,
        'posts': Postit.objects.all(),
        'categorias': Categoria.objects.all() 
    }
    return render(request, 'index.html', context)