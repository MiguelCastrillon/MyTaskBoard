from django.shortcuts import render, redirect
from .models import Task

def main(request):
    if request.method == 'POST':
        taskname = request.POST.get('taskName')
        description = request.POST.get('description')
        icon = request.POST.get('selectedIcon')
        status = request.POST.get('selectedStatus')

        task = Task.objects.create(title=taskname, description=description, icon=icon, status=status)
        task.save()

        return redirect('taskboard')
    
    task = Task.objects.all()

    context = {
        'tasks': task[::-1]
    }

    return render(request, 'index.html', context)

def delete(request, id):
    Task.objects.filter(id=id).delete()
    
    return redirect('taskboard')

def edit(request, id):
    if request.method == 'POST':
        new_title = request.POST.get('taskName')
        new_description = request.POST.get('description')
        new_icon = request.POST.get('selectedIcon')
        new_status = request.POST.get('selectedStatus')
        
        Task.objects.filter(id=id).update(
            title=new_title,
            description=new_description,
            icon=new_icon,
            status=new_status
        )

        return redirect('taskboard')

        


