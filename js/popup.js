document.addEventListener('DOMContentLoaded', do_chartMst);
function do_chart () {
  var coinArray = []
  var coin
  var tblHtml = '<table class="table is-striped is-hoverable is-size-6 is-fullwidth" id="coinwatch"><thead><th>Currency</th><th>Price</th><th nowrap>24HR Chg</th></thead><tbody>'
  const PLUS = "class='has-text-success'>"
  const MINUS = "class='has-text-danger'>"
  // comment out chrome apis, url, and ending )} to test as web page -- 3lines
  chrome.storage.sync.get('currencies', function(items) {
    if (!chrome.runtime.error) {
      const url = 'https://min-api.cryptocompare.com/data/pricemultifull?tsyms=USD&fsyms=' + items.currencies + '&extraParams=CryptoWatch'
  // const url = 'https://min-api.cryptocompare.com/data/pricemultifull?tsyms=USD&fsyms=BTC,BTC,CLOAK,ETH,BTS,BCH,BURST'
      axios.get(url).then(function(res){
        for (coin in res.data.DISPLAY){
          coinArray.push(res.data.DISPLAY[coin])
        }
        for( var i = 0; i< coinArray.length; i++ ){
          var chg = Number(coinArray[i]['USD']['CHANGEPCT24HOUR'])
          var cssCls = chg >= 0 ? PLUS : MINUS
          tblHtml+="<tr>"
          tblHtml+="<td>" + coinArray[i]['USD']['FROMSYMBOL']+"</td>"
          tblHtml+="<td class='has-text-right' style='white-space: nowrap'>" + coinArray[i]['USD']['PRICE']+"</td>"
          tblHtml+="<td " + cssCls + coinArray[i]['USD']['CHANGEPCT24HOUR'] +"%</td>"
          tblHtml+="</tr>"
        }
        var tblClose = "</tbody id='tblClose'></table>"
        $('#spinner').hide()
        document.getElementById('charts').innerHTML += tblHtml
      }).catch(function(err){
        console.log(err)
      });
     }
   })
}

function add_new(id) {
  const url = 'https://min-api.cryptocompare.com/data/pricemultifull?tsyms=USD&fsyms=' + id + '&extraParams=CryptoWatch'
  axios.get(url).then(function(res){
    for (coin in res.data.DISPLAY){
      coinArray.unshift(res.data.DISPLAY[coin])
    }
    for( var i = 0; i< coinArray.length; i++ ){
      var chg = Number(coinArray[i]['USD']['CHANGEPCT24HOUR'])
      var symbol = coinArray[i]['USD']['FROMSYMBOL']
      var cssClass = chg >= 0 ? PLUS : MINUS
      tblHtml+="<tr " +"id='" + symbol + "' >"
      tblHtml+="<td><i class='cc '" +symbol + ">" + symbol +"</i></td>"
      tblHtml+="<td class='has-text-right' style='white-space: nowrap'>" + coinArray[i]['USD']['PRICE']+"</td>"
      tblHtml+="<td " + cssCls + coinArray[i]['USD']['CHANGEPCT24HOUR'] +"%</td>"
      tblHtml+="</tr>"
    }
    document.getElementById('coinwatch').innerHTML += tblHtml
  }).catch(function(err){
    console.log(err)
  });
}


$(document).ready(function() {

  var coinselect = $('#coinselect')

    $(coinselect).select2({
      placeholder: 'Choose currencies to watch',
      allowClear: true,
      data: [{id:'BTC', text:'Bitcoin'},
      {id:'ETH', text:'Ethereum'},
      {id:'LTC', text:'Litecoin'},
      {id:'BCH', text:'Bitcoin Cash'},
      {id:'XRP', text:'Ripple'},
      {id:'ACT', text:'Achain'},
      {id:'AEON', text:'Aeon'},
      {id:'ARK', text:'Ark'},
      {id:'XAS', text:'Asch'},
      {id:'BAY', text:'BitBay'},
      {id:'BTG', text:'Bitcoin Gold'},
      {id:'BTCD', text:'BitcoinDark'},
      {id:'BCC', text:'BitConnect'},
      {id:'BTX', text:'Bitcore'},
      {id:'BTS', text:'BitShares'},
      {id:'BLOCK', text:'Blocknet'},
      {id:'BCO', text:'BridgeCoin'},
      {id:'BURST', text:'Burst'},
      {id:'GBYTE', text:'Byteball Bytes'},
      {id:'BCN', text:'Bytecoin'},
      {id:'ADA', text:'Cardano'},
      {id:'CLOAK', text:'CloakCoin'},
      {id:'XCP', text:'Counterparty'},
      {id:'CRW', text:'Crown'},
      {id:'CNX', text:'Cryptonex'},
      {id:'DASH', text:'Dash'},
      {id:'DCT', text:'DECENT'},
      {id:'DCR', text:'Decred'},
      {id:'DGB', text:'DigiByte'},
      {id:'XDN', text:'DigitalNote'},
      {id:'DIME', text:'Dimecoin'},
      {id:'DOGE', text:'Dogecoin'},
      {id:'ECC', text:'ECC'},
      {id:'EMC2', text:'Einsteinium'},
      {id:'ECA', text:'Electra'},
      {id:'ETN', text:'Electroneum'},
      {id:'EMC', text:'Emercoin'},
      {id:'EOS', text:'EOS'},
      {id:'ETC', text:'Ethereum Classic'},
      {id:'XP', text:'Experience Points'},
      {id:'FCT', text:'Factom'},
      {id:'FTC', text:'Feathercoin'},
      {id:'FLASH', text:'Flash'},
      {id:'GAME', text:'GameCredits'},
      {id:'GRS', text:'Groestlcoin'},
      {id:'NLG', text:'Gulden'},
      {id:'GXS', text:'GXShares'},
      {id:'THC', text:'HempCoin'},
      {id:'HSR', text:'Hshare'},
      {id:'HTML', text:'HTMLCOIN'},
      {id:'IOC', text:'I/O Coin'},
      {id:'MIOTA', text:'IOTA'},
      {id:'KMD', text:'Komodo'},
      {id:'KCS', text:'KuCoin Shares'},
      {id:'LBC', text:'LBRY Credits'},
      {id:'LSK', text:'Lisk'},
      {id:'LKK', text:'Lykke'},
      {id:'ETP', text:'Metaverse ETP'},
      {id:'MNX', text:'MinexCoin'},
      {id:'MONA', text:'MonaCoin'},
      {id:'XMR', text:'Monero'},
      {id:'MOON', text:'Mooncoin'},
      {id:'NMC', text:'Namecoin'},
      {id:'NAV', text:'NAV Coin'},
      {id:'NEBL', text:'Neblio'},
      {id:'XEM', text:'NEM'},
      {id:'NEO', text:'NEO'},
      {id:'NXS', text:'Nexus'},
      {id:'NXT', text:'Nxt'},
      {id:'PAC', text:'PACcoin'},
      {id:'PART', text:'Particl'},
      {id:'PPC', text:'Peercoin'},
      {id:'PIVX', text:'PIVX'},
      {id:'PURA', text:'Pura'},
      {id:'QTUM', text:'Qtum'},
      {id:'XRB', text:'RaiBlocks'},
      {id:'RDD', text:'ReddCoin'},
      {id:'RISE', text:'Rise'},
      {id:'SLS', text:'SaluS'},
      {id:'XSH', text:'SHIELD'},
      {id:'SHIFT', text:'Shift'},
      {id:'SC', text:'Siacoin'},
      {id:'SKY', text:'Skycoin'},
      {id:'SMART', text:'SmartCash'},
      {id:'XSPEC', text:'Spectrecoin'},
      {id:'STEEM', text:'Steem'},
      {id:'XLM', text:'Stellar'},
      {id:'STRAT', text:'Stratis'},
      {id:'SYS', text:'Syscoin'},
      {id:'UBQ', text:'Ubiq'},
      {id:'VEN', text:'VeChain'},
      {id:'XVG', text:'Verge'},
      {id:'VTC', text:'Vertcoin'},
      {id:'VIA', text:'Viacoin'},
      {id:'VOX', text:'Voxels'},
      {id:'WAVES', text:'Waves'},
      {id:'XBY', text:'XTRABYTES'},
      {id:'ZEC', text:'Zcash'},
      {id:'ZCL', text:'ZClassic'},
      {id:'XZC', text:'ZCoin'},
      {id:'ZEN', text:'ZenCash'}],
      width: '100%',
      multiple: true,
      // templateSelection: formatCoin
    });

    $(coinselect).change(function(e) {
      // var selections = ( JSON.stringify$(coinselect).select2('data')) );
      var selections = $(coinselect).select2('data')
      //console.log('Selected IDs: ' + ids);
      console.log(selections)
      var i = (selections.length) - 1
      console.log('Selected options: ' + selections[i]['id'] );
      // only selected options are sent
      // if dynamically populating table, need to validate full
      // list each time
      // do not remove if removed from selected. leave that option
      // to remove from table directly
      // therefore only add if there is a new coin added to the end
      // of the list

      // get coin (ids) from select2
      // add new coin?
          // if coin id already exists in table, then ignore
          // else
          // 1. query for price
          // 2. add to table
      // remove coin?
          // remove coin from table
            // query coin ids in table
            // use convention to identify
            // this should only happen if selection is open
            // provide delete button in table

      var IDs = [];
      $("#coinwatch").find(selections[i]['id']).each(function(){ IDs.push(this.id); });


    });
});

function formatCoin (coin) {
  if (!coin.id) {
    return coin.text;
  }
  console.log('coin id found')
  var $coin = $(
    "<span class='cc " + coin.id + ">"  + coin.text + "</span>"
  );
  console.log(coin)
  return $coin;
};

function loadTable () {
  var template = $('#charts').html()

  Mustache.parse(template)
  // build mstCoinList
  // var rendered = Mustache.render(template, mstCoinList)

  // testing object mstCoinList
  var rendered = Mustache.render(template, {mstCoinList: [
    {"symbol": "BTC","price": "$10,209","cssClass": "has-text-success","changePct": "3.2"},
    {"symbol": "ETH","price": "$1,037","cssClass": "has-text-success","changePct": "7.3"},
    {"symbol": "BCH","price": "$2,195","cssClass": "has-text-danger","changePct": "1.2"},
    {"symbol": "LTC","price": "$198","cssClass": "has-text-success","changePct": "0.67"},
    {"symbol": "XRP","price": "$1.32","cssClass": "has-text-success","changePct": "6.38"}
  ]})

  // turn off the spinner...
  $('#spinner').hide()

  // and load the table instead
  $('#target').html(rendered)
}

function do_chartMst() {
  loadTable()
}

function removeCoin(coin) {
  console.log('removeCoin called')
}
