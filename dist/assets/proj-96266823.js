import{a7 as t}from"./index-d420b9fe.js";const d={addProject(e,r,o){return t({url:"/projects",method:"POST",data:{name:e,describe:r,team:o}})},resetProject(e,r,o){return t({url:`/projects/${o}`,method:"PATCH",data:{name:e,describe:r}})},getAllProjects(e,r){return t({url:"/projects",method:"GET",params:{team:e,ordering:r}})},deleteProject(e,r){return t({url:`/projects/${r}`,method:"DELETE",data:{team:e}})},getSingleProject(e){return t({url:`/projects/${e}`,method:"GET",params:{project:e}})},getReProject(e,r){return t({url:"/project/deleted",method:"GET",params:{team:e,ordering:r}})},restoreProject(e,r){return t({url:"/project/restore",method:"PATCH",data:{team:e,id:r}})},copyProject(e,r){return t({url:"/project/duplicate",method:"POST",data:{team:e,id:r}})}};export{d as p};
