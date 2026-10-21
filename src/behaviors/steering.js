/* Steering direction helpers. Inspired by the Seek/Flee/Wander exercises of
 * https://github.com/micbuffa/IA2_SteeringBehaviors_Casablanca_G2
 * This module uses plain JavaScript vectors; the professor's p5 Vehicle files
 * remain available unmodified in course-reference/ for study. */
(function(root,factory){
 const api=factory();
 if(typeof module!=='undefined'&&module.exports)module.exports=api;
 root.Steering=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(){
 function normalize(x,y){const length=Math.hypot(x,y);return length>0?{x:x/length,y:y/length}:{x:0,y:0}}
 function seek(position,target){return normalize(target.x-position.x,target.y-position.y)}
 function flee(position,threat){return normalize(position.x-threat.x,position.y-threat.y)}
 function wander(angle){return {x:Math.cos(angle),y:Math.sin(angle)}}
 return {normalize,seek,flee,wander};
});
