// Author:
// Title:

uniform vec2 iResolution;
uniform float iTime;
uniform float complete;
uniform vec3 p1;
uniform vec3 p2;

varying vec2 uv;

uniform sampler2D texture;
uniform sampler2D noise;

#define pi 3.1415926536

float wave(vec3 p){
    float y = 0.0;
    float a = 1.0;
    float w = 1.0;
    float max = 0.0;
    for(int i=0;i<3;i++){
        float fi = float(i)*2.32;
        vec3 k = normalize(vec3(sin(fi), cos(fi),cos(fi*2.+1.2)))*(w*0.02+1.0);
        y+=a*sin(2.0*pi*w*iTime+dot(p, k));
        a*=0.9;
        w*=2.0;
        max+=a;
    }
    return y/max;
}

vec2 transform(vec2 p){
    vec2 o = p/iResolution.xy;
    float aspect = iResolution.x/iResolution.y;
    o-=0.5;
    o.x*=aspect;
    if(iResolution.y>iResolution.x){
        o/=aspect;
    }
    o*=3.0;

    vec2 offset = vec2(
        wave(vec3(p*.04, 0.0)),
        wave(vec3(p*.04, 2.0))
    );

    return o+offset*.02;
}


float heightMap(vec2 p){
    
    float h = (1.5-dot(p,p))/3.0;
    h-=(1.0-complete);
    h+=sin(wave(vec3(p,h)*7.))*0.04;

    

    
    // if(h<0.0) return -0.1;
    return h;
}


float heightMapWithMouse(vec2 p){
    vec2 mo = transform(p1.xy);
    float h = heightMap(p);
    vec3 r = vec3(p, h);
    vec3 m = vec3(mo, max(0.0, heightMap(mo)));
    float mol = length(r-m);
    mol *= 2.0;
    mol = mol*atan(mol)-0.5*log(1.0+mol*mol);
    float dh = ((sin(mol*3.+iTime*pi*-20.0)+1.0)/(mol*mol+2.0))*0.2*p1.z;
    
    h=heightMap(p-(p)*dh)-dh;
    return sqrt(h);
}


vec3 normalMap(vec3 normal){
    vec2 p = normalize(normal).xy*.5+.5;
    return texture2D(texture, p).rgb;
}


void main() {
    vec2 st = transform(gl_FragCoord.xy);
    
    
    
    

    float small = 0.001;
    float height = heightMapWithMouse(st);
    float height_x = heightMapWithMouse(st+vec2(small,0.0));
    float height_y = heightMapWithMouse(st+vec2(0.0,small));

    float ball = step(0.0, height);

    float dx = (height_x-height)/small;
    float dy = (height_y-height)/small;

    vec3 normal = normalize(cross(
        vec3(1, 0, dx),
        vec3(0, 1, dy)
    ));

    vec3 color = vec3(normalMap(normal)) +0.6 * (texture2D(noise, (gl_FragCoord.xy/iResolution-0.5)*(1.0-height*0.3)+0.5).rgb-0.5);
    color*=ball;
    // color = normal*ball;
    gl_FragColor = vec4(color,ball);
}