var job = ['basil keeper', 'cat bagger','mannequin assembler','shrub clipper','fish scale collector', 'easel builder','wall stud finder','bottle filler','circus tumbler','grout gutter','dog shearer','facial airbrusher','leaf splitter','pitch finder','grape crusher','barrel waxer','ewe catcher','lyft driver','record groover','encyclopædia salesman','plague doctor','town crier','beard oiler','supernatural crime fighter','alchemist',];

var relation = ['wife','daughter','husband','son','niece','nephew','sweetheart','lover','grandmama','granddam','grandfather','second cousin',"great uncle’s girlfriend","aunt’s pool boy","great grandson","adopted ward","godchild",'newborn'];

function getRandJob(){
   return (job[Math.floor(Math.random()*job.length)]).toString();
};


function getRandRelation(){
  return (relation[Math.floor(Math.random()*relation.length)]).toString(); 
};


function makeTitle(){
  return "the "+getRandJob()+"'s "+getRandRelation();
}

function toTitleCase(str)
{
    return makeTitle().replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

$('.itsbookname').hide();

 $('#button a').on('click', function(){
   	// $('#bookname').html("the "+getRandJob()+"'s "+getRandRelation());
   	 $('#bookname').html(toTitleCase());
     $('.description').hide("slow");
     $('.itsbookname').show("slow");
     // how to make this have a larger margin??
    // $('#buttondiv').css("margin-top","10%");
 });