var navmenuAnchorTags=document.querySelectorAll('.nav-menu a');
//console.log(navmenuAnchorTags);

for(var i=0;i<navmenuAnchorTags.length;i++)
{
    navmenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionID=this.textContent.trim().toLowerCase();
        //console.log(targetSectionID);
        var targetSection=document.getElementById(targetSectionID);
        //console.log(targetSection);

        var interval=setInterval(function(){
            var targetSectionCoordinates=targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top<=120)
            {
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,120);

            //console.log(targetSectionCoordinates.top);
            //console.log("page offset :", window.pageYOffset);
            //console.log(document.body.scrollHeight);
        },25);
    });
}
