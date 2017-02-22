function getCmtDataList() {
    var cmtArr = [];

    // 可以使用jsonp获取服务器的字幕数据
    /*$.ajax({
        type : 'GET',
        url : 'http://192.168.9.67/test.php',
        dataType : 'jsonp',
        data : {sid : 100},
        success : function(data) {
            cmtArr = data.dataList;

            if (cmtArr && cmtArr.length > 0) {
                sendMsg(cmtArr);
            }
        }
Object { text="瀑布的水逆流而上",  bgColor="#424448",  icon="http://wx.qlogo.cn/mmope...7ia33QM3EnLalRrcTkeia/0"}
Object { text="蒲公英的种子从远处飘回",  bgColor="#424448",  icon="http://wx.qlogo.cn/mmope...7ia33QM3EnLalRrcTkeia/0"}
Object { text="聚成伞的模样",  bgColor="#424448",  icon="http://wx.qlogo.cn/mmope...7ia33QM3EnLalRrcTkeia/0"}
Object { text="太阳从西边升起，落向东方",  bgColor="#424448",  icon="http://wx.qlogo.cn/mmope...7ia33QM3EnLalRrcTkeia/0"}
Object { text="子弹退回枪膛",  bgColor="#424448",  icon="http://wx.qlogo.cn/mmope...7ia33QM3EnLalRrcTkeia/0"}
Object { text="运动员回到起跑线上",  bgColor="#424448",  icon="http://wx.qlogo.cn/mmope...7ia33QM3EnLalRrcTkeia/0"}
Object { text="我交回录取通知书",  bgColor="#424448",  icon="http://wx.qlogo.cn/mmope...7ia33QM3EnLalRrcTkeia/0"}
Object { text="忘了十年寒窗",  bgColor="#424448",  icon="http://wx.qlogo.cn/mmope...7ia33QM3EnLalRrcTkeia/0"}
Object { text="厨房里飘来饭菜的香",  bgColor="#424448",  icon="http://wx.qlogo.cn/mmope...7ia33QM3EnLalRrcTkeia/0"}
Object { text="你把我的卷子签好名字",  bgColor="#424448",  icon="http://wx.qlogo.cn/mmope...7ia33QM3EnLalRrcTkeia/0"}
Object { text="关掉电视，帮我把书包背上",  bgColor="#424448",  icon="http://wx.qlogo.cn/mmope...7ia33QM3EnLalRrcTkeia/0"}
Object { text="你还在我身旁",  bgColor="#424448",  icon="http://wx.qlogo.cn/mmope...7ia33QM3EnLalRrcTkeia/0"}
    });*/

    // 测试数据
    cmtArr = [
        // {"text":"大家期待什么新品啊", "bgColor":"#424448", "icon":"http://face.weiphone.net/data/avatar/000/15/31/95_avatar_big.jpg"},
        // {"text":"会有什么惊喜吗？", "bgColor":"#424448", "icon":"http://face.weiphone.net/data/avatar/000/15/31/95_avatar_big.jpg"},
        // {"text":"等待中。。", "bgColor":"#23b28b", "icon":"http://face.weiphone.net/data/avatar/000/15/31/95_avatar_big.jpg"},
        // {"text":"会有什么新产品呢？", "bgColor":"#424448", "icon":"http://face.weiphone.net/data/avatar/000/15/31/95_avatar_big.jpg"},
        // {"text":"定时执行", "bgColor":"#23b28b", "icon":"http://face.weiphone.net/data/avatar/000/15/31/95_avatar_big.jpg"},
        // {"text":"1123333446红咖喱的非农房价", "bgColor":"#ec4262", "icon":"http://face.weiphone.net/data/avatar/000/15/31/95_avatar_big.jpg"},
        // {"text":"测试接口发评论00", "bgColor":"#ec4262", "icon":"http://face.weiphone.net/data/avatar/000/15/31/95_avatar_big.jpg"},
        // {"text":"测试接口发评论00", "bgColor":"#3dbbc0", "icon":"http://face.weiphone.net/data/avatar/000/15/31/95_avatar_big.jpg"},
        // {"text":"啊啊啊啊啊啊啊哦哦哦诶IEIE恩家报表出具", "bgColor":"#ec4262", "icon":"http://face.weiphone.net/data/avatar/000/15/31/95_avatar_big.jpg"},
        // {"text":"的方式的方法反反复复反复反复", "bgColor":"#23b28b", "icon":"http://face.weiphone.net/data/avatar/000/15/31/95_avatar_big.jpg"}
    ]

    sendMsg(cmtArr);
}


function sendMsg(cmtArr) {

    for (var i=0; i<cmtArr.length; i++) {
        var cmtItem = cmtArr[i],
            iconStr = '';

        if (cmtItem.icon && cmtItem.icon.length > 0) {
            iconStr = '<span class="icon"><img src="'+ cmtItem.icon +'"></span>';
        }

        // 字幕的节点内容
        cmtItem.text = iconStr + cmtItem.text;
        cmtItem.mode = 1;
        cmtItem.dur = Math.floor(Math.random()*4000 + 4000);

        CM.send(cmtItem);
    }
}

function cmtController() {
    getCmtDataList();

    setTimeout(function(){
        cmtController();
    }, 5000);
}


document.addEventListener('DOMContentLoaded', function(){
    var CM = new CommentManager(document.getElementById('commentCanvas'));
    CM.init();
  
    // 启动播放弹幕（在未启动状态下弹幕不会移动）
    CM.start();

    // 开放 CM 对象到全局这样就可以在 console 终端里操控
    window.CM = CM;

    // 弹幕播放
    cmtController();
} ,false);