var qlink = qlink || {};
qlink.formatter = qlink.formatter || {};

$.extend(qlink.formatter, {
  support: {
    type: {"payment": "支付问题", "technology":"技术问题"},
    priority: {"2": "紧急", "1":"一般", "0":"低"},
    priorityLabel: {"2": "label-important", "1":"label-warning", "0":"label-success"},
    status: {"0": "删除", "1":"等待回复", "2":"有新回复", "3":"已解决", "4": "已关闭"},
    admin_status: {"0": "删除", "2":"等待用户回馈", "1":"有新回复", "3":"已解决", "4": "已关闭"}
  },
  orders: {
    trade_status : { "WAIT_BUYER_PAY": "等待买家付款", "WAIT_SELLER_SEND_GOODS":"买家已付款,等待卖家发货", "WAIT_BUYER_CONFIRM_GOODS":"卖家已发货,等待买家确认", "TRADE_FINISHED":"交易成功结束", 
    "TRADE_CLOSED":"交易中途关闭", "WAIT_SELLER_AGREE":"退款协议等待卖家确认中", "SELLER_REFUSE_BUYER":"卖家不同意协议,等待买家修改", "WAIT_BUYER_RETURN_GOODS":"￼", 
    "WAIT_SELLER_CONFIRM_GOODS":"等待卖家收货", "REFUND_SUCCESS":"退款成功", "REFUND_CLOSED":"退款关闭"} 
  },
  manual: {
    language: {'en-us': 'English', 'zh-cn': '简体中文'},
    software: {'ipsec': 'IPSec VPN', 'anyconnect': 'AnyConnect', 'vpnclient': 'VPN Client'}
  },
  users: {
    status: {'ADMIN': '管理员', 'USER': '正常用户', 'TRIAL': '未确认收货用户', 'NOACCESS': '网站用户', 'GUEST': '试用用户'}
  },
  format: function(namespaces, str){
    var tokens = namespaces.split('.'),
      obj = qlink.formatter;
    for(var i=0, token; token = tokens[i]; i++)
      obj = obj[token];
    
    if(typeof(obj[str]) == 'string')
      return obj[str];
    else
      return str;
  },
  formatLDAPTime: function(dt) {
    return dt.substr(0,4) + "-" + dt.substr(4,2) + "-" + dt.substr(6,2) + " " + dt.substr(8,2) + ":" + dt.substr(10,2) + ":" + dt.substr(12,2);
  }
});