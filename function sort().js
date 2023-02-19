function sort(x)
{
    var i,j;
    for(i=0;i<3;i++)
    {
        for(j=2;j>=i;j--)
        {
            if(x[j+1]>x[j])
            {
                t=x[j];
                x[j]=x[j+1];
                x[j+1]=t;
            }
        }
    }
    return x;
}
function main()
{
    
    var sports= document.getElementById('sports');
    var politics=document.getElementById('politics');
    var international=document.getElementById('international');
    if(sports=='sports')
    {
        var k[3],i,j;
        var x=document.getElementById('eg1');
        var y=document.getElementById('eg2');
        var z=document.getElementById('eg3');
        var xl=document.getElementById('');
        var yl=document.getElementById('');
        var zl=document.getElementById('');
        a=[x,y,z];
        s=[376,438,239];
        r=sort(s);
        for(i=0;i<3;i++)
        {
            for(j=0;j<3;j++)
            {
                if(r[i]==s[j])
                {
                    k[i]==a[j];
                }
            }
        }
        console.log(k);
        if(xl=='')
       {
            s=[377,438,239];
       }
       if(yl=='')
       {
            s=[376,439,239];
       }
       if(zl=='')
       {
            s=[376,438,240];
       }  
    }
    if(politics=='politics')
    {
        var k1[3],i1,j1;
        var x1=document.getElementById('Sharad');
        var y1=document.getElementById('East');
        var z1=document.getElementById('AAP');
        var x1l=document.getElementById('');
        var y1l=document.getElementById('');
        var z1l=document.getElementById('');
        a1=[x1,y1,z1];
        s1=[344,122,253];
        r1=sort(s1);
        for(i1=0;i1<3;i1++)
        {
            for(j1=0;j1<3;j1++)
            {
                if(r1[i]==s1[j])
                {
                    k1[i]==a1[j];
                }
            }
        }
        console.log(k1);
        if(x1l=='')
        {
             s1=[345,122,253];
        }
        if(y1l=='')
        {
             s1=[344,123,253];
        }
        if(z1l=='')
        {
             s1=[344,122,254];
        }  
    }
    if(international=='international')
    {
        var k2[3],i2,j2;
        var x2=document.getElementById('eg4');
        var y2=document.getElementById('eg5');
        var z2=document.getElementById('eg6');
        var x2l=document.getElementById('');
        var y2l=document.getElementById('');
        var z2l=document.getElementById('');
        a2=[x2,y2,z2];
        s2=[376,438,239];
        r2=sort(s2);
        for(i2=0;i2<3;i2++)
        {
            for(j2=0;j2<3;j2++)
            {
                if(r2[i]==s2[j])
                {
                    k2[i]==a2[j];
                }
            }
        }
    }
    console.log(k2);
    if(x2l=='')
        {
             s2=[377,438,239];
        }
        if(y2l=='')
        {
             s2=[376,439,239];
        }
        if(z2l=='')
        {
             s2=[376,438,240];
        } 
        
}