//smooth scroll implementation
var navmenuAnchorTags=document.querySelectorAll('.nav-menu a');
//console.log(navmenuAnchorTags);

for(var i=0;i<navmenuAnchorTags.length;i++)
{
    navmenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionID=this.textContent.trim().toLowerCase();
        console.log(targetSectionID);
        if(targetSectionID == 'home')
        {
            return;
        }
        if(targetSectionID == 'contacts')
        {
            var targetSection=document.getElementById(targetSectionID);
            //console.log(targetSection);

            var interval=setInterval(function(){
                var targetSectionCoordinates=targetSection.getBoundingClientRect();
                if(targetSectionCoordinates.top<=120)
                {
                    clearInterval(interval);
                    return;
                }
                window.scrollBy(0,50);

                console.log(targetSectionCoordinates.top);
                //console.log("page offset :", window.pageYOffset);
                //console.log(document.body.scrollHeight);
            },20);
        }
        else
        {
            var targetSection=document.getElementById(targetSectionID);
            //console.log(targetSection);

            var interval=setInterval(function(){
                var targetSectionCoordinates=targetSection.getBoundingClientRect();
                if(targetSectionCoordinates.top<=0)
                {
                    clearInterval(interval);
                    return;
                }
                window.scrollBy(0,50);

                console.log(targetSectionCoordinates.top);
                //console.log("page offset :", window.pageYOffset);
                //console.log(document.body.scrollHeight);
            },20);
        }
    });
}
//Skill section animation(auto-fill)
var progressBars=document.querySelectorAll('.skills-progress>div');
var skillsContainer=document.getElementById('skills-container');
var animationDone=false;

function initialiseBars()
{
    for(let bar of progressBars)
    {
        bar.style.width='0%';
    }
}

initialiseBars();

function fillbars()
{
    for(let bar of progressBars)
    {
        let targetWidth=bar.getAttribute('data-bar-width');
        let currentWidth=0;
        let interval=setInterval(function(){
            if(currentWidth>targetWidth)
            {
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width=currentWidth+ '%';
        },10);
    }
}

function checkScroll()
{
    var coordinates=skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top<=window.innerHeight)
    {
        animationDone=true;
        //console.log("animationDone");
        fillbars();
    }
    else if(coordinates.top>window.innerHeight)
    {
        animationDone=false;
        initialiseBars();
    }
}

window.addEventListener('scroll',checkScroll);

