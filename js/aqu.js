//水草类
function Aqu(color, num, amp){
    this.startPoint = [];
    this.endPointX = [];
    this.endPointY = [];
    this.amp = [];
    this.beta = 0;
    this.color = (color == undefined)?"#367AEC":color;
    this.num = (num == undefined)?80:num;
    this.mouse = utils.captureMouse(canvas);//实例化
}
       
Aqu.prototype.init = function(){
    for(var i=0; i<this.num; i++){
        this.startPoint[i] = Math.random()*20 + i*10;
        this.endPointX[i] = this.startPoint[i];
        this.endPointY[i] = canvas.height/1.5 - Math.random()*50;
        this.amp[i] = Math.random()*10 + 40;
    }
}
Aqu.prototype.draw = function(ctx,del){
    ctx.save();
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.globalAlpha = 0.8;
    ctx.strokeStyle =this.color;
       
    //Math.sin的应用
    this.beta += del*0.0012;
    // console.log(this.beta);
    var l = Math.sin(this.beta);
       
    for(var i=0; i<this.num; i++){
        ctx.beginPath();
        ctx.moveTo(this.startPoint[i], canvas.height);
          
        //周期性改变水草的顶点X坐标
        this.endPointX[i] = this.startPoint[i] + l*this.amp[i]
          
        ctx.quadraticCurveTo(this.startPoint[i],canvas.height-60,this.endPointX[i],this.endPointY[i]);//贝塞尔曲线
        ctx.stroke();
    }
    ctx.restore();
}
var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');
    canvas.height = document.documentElement.clientHeight;
    canvas.width = document.body.clientWidth;
    centerx = canvas.width/2;
    centery = canvas.height/2;
    rad = Math.PI*2/100;  //圆分为100份
    speed = 0.5;

    function drawWhiteC() {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = '#A5DEF1';
        ctx.lineWidth = 12;
        ctx.arc(centerx,centery,80,0,Math.PI*2);
        ctx.stroke();
        ctx.restore();
    };

    function drawBlueC(n) {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = '#367AEC';
        ctx.lineWidth = 12;
        ctx.arc(centerx,centery,80,-Math.PI/2,-Math.PI/2 + n*rad);
        ctx.stroke();
        ctx.restore();
    };

    function drawTxt(n) {
        ctx.save();
        ctx.beginPath();
        ctx.font="26px Arial";
        ctx.textAlign = 'center';
        ctx.strokeStyle = '#F47C7C';
        ctx.fillText(n.toFixed(0)+'%',centerx,centery);
        ctx.restore();
    }; 
    // 加载进度条
    (function drawCircle(){
        var circle = null;
        circle = requestAnimationFrame(drawCircle,canvas);
        ctx.clearRect(0,0,canvas.width,canvas.height);
        drawWhiteC();
        drawBlueC(speed);
        drawTxt(speed);
        if (speed >= 100) {
            window.cancelAnimationFrame(circle);
            drawAqu();
        }else {
            speed += 0.5;
        };
    }())
    function drawAqu() {
        canvas.height = 235;
        console.log(document.documentElement.clientHeight);
        $('.discuss_ul').css('height',document.documentElement.clientHeight - 320 + 'px');
        $('.feng-ccl-panel').css('height','235px');
        //实例水草
        var oAquAni = null;
        var oAqu = new Aqu();   
        var oldTime = new Date().getTime(),
            del = null, newTime = null;
        //初始化
        oAqu.init();  
        (function drawFrmae(){
            oAquAni = requestAnimationFrame(drawFrmae);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
             
            newTime = new Date().getTime();
            del = new Date().getTime() - oldTime;
            oldTime = newTime;
         
            oAqu.draw(ctx,del);
        }())
        var cmtArr = [
            {text: "瀑布的水逆流而上", bgColor: "#424448", icon: "img/0.jpg"},
            {text: "蒲公英的种子从远处飘回", bgColor: "#424448", icon: "img/0.jpg"},
            {text: "聚成伞的模样", bgColor: "#424448", icon: "img/0.jpg"},
            {text: "太阳从西边升起，落向东方", bgColor: "#424448", icon: "img/0.jpg"},
            {text: "子弹退回枪膛", bgColor: "#424448", icon: "img/0.jpg"},
            {text: "运动员回到起跑线上", bgColor: "#424448", icon: "img/0.jpg"},
            {text: "我交回录取通知书", bgColor: "#424448", icon: "img/0.jpg"},
            {text: "忘了十年寒窗", bgColor: "#424448", icon: "img/0.jpg"},
            {text: "厨房里飘来饭菜的香", bgColor: "#424448", icon: "img/0.jpg"},
            {text: "你把我的卷子签好名字", bgColor: "#424448", icon: "img/0.jpg"},
            {text: "关掉电视，帮我把书包背上", bgColor: "#424448", icon: "img/0.jpg"},
            {text: "你还在我身旁", bgColor: "#424448", icon: "img/0.jpg"}
        ];
        var i = 0;
        poty();
        function poty() {
            if (i > 12) {
                return;   
            }else {
                sendMsg(cmtArr[i]);
                i += 1;
                setTimeout(function() {
                    poty();
                },3500);
            };
        }  
    };