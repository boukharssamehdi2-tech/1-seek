/* Minimal p5.Vector-compatible math for the professor's unmodified Vehicle
 * steering methods. The game renders with native Canvas 2D, not p5. */
class CourseVector {
 constructor(x=0,y=0){this.x=x;this.y=y}
 copy(){return new CourseVector(this.x,this.y)}
 add(v){this.x+=v.x;this.y+=v.y;return this}
 sub(v){this.x-=v.x;this.y-=v.y;return this}
 mult(s){this.x*=s;this.y*=s;return this}
 mag(){return Math.hypot(this.x,this.y)}
 magSq(){return this.x*this.x+this.y*this.y}
 setMag(m){const n=this.mag();if(n){this.mult(m/n)}return this}
 limit(m){if(this.magSq()>m*m)this.setMag(m);return this}
 set(x,y){this.x=x;this.y=y;return this}
 heading(){return Math.atan2(this.y,this.x)}
}
const createVector=(x,y)=>new CourseVector(x,y);
const p5={Vector:{sub:(a,b)=>a.copy().sub(b)}};
const map=(v,a,b,c,d)=>b===a?c:c+(v-a)*(d-c)/(b-a);
