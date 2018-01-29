const FILE_FORMAT = 'v2'

$(document).ready(function() {

  restore_options()

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
      multiple: true
      // templateSelection: formatCoin,
      // templateResult: formatCoin
    });

  $(coinselect).change(function(e) {
    var IDs = $('#watch-list').text()
    var selections = $(coinselect).select2('data')
    var tmpCurrent = IDs.split(',')
    selections.forEach(function(selection) {
      if (!tmpCurrent.includes(selection['id'])) {
        IDs += selection['id'] + ','
      }
    })
    $('#watch-list').text(IDs)
    save_options()
  })

  loadCurrencyList()
}); // end document ready

function formatCoin (coin) {
  if (!coin.id) {
    return coin.text;
  }
  var $coin = $('<i class="' + coin.element.value + '"> '  + coin.text + '</i>');
  return $coin;
}

function loadCurrencyList () {
  var data = {
    currency:  [
      // {"currency":"BTC","lang":"BTC","xcode":"B"},
      {"currency":"AUD","lang":"en-AU","xcode":"$"},
      {"currency":"CAD","lang":"en-CA","xcode":"$"},
      {"currency":"CNY","lang":"zh-CN","xcode":"¥"},
      {"currency":"EUR","lang":"de-DE","xcode":"€"},
      {"currency":"GBP","lang":"en-GB","xcode":"₤"},
      {"currency":"INR","lang":"en-IN","xcode":"₹"},
      {"currency":"ISL","lang":"he","xcode":"₪"},
      {"currency":"JPY","lang":"ja","xcode":"¥"},
      {"currency":"KRW","lang":"ko","xcode":"₩"},
      {"currency":"USD","lang":"en-US","xcode":"$"}]
  }

  var template = $('#currencySelect').html()
  Mustache.parse(template)
  var rendered = Mustache.render(template, data)
  $('#currencyTarget').html(rendered)
  $('.dropdown').click(function() {
    $(this).toggleClass('is-active')
  })
  $('#dropdown-fiat').click(function(item) {
    console.log(item)
    $('#watch-fiat').text(item.target.id + ',' + item.target.lang)
  save_options()
  })
}



function loadTable (inCoinList) {
  if (inCoinList == null) {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    inCoinList = [{mstCoinList:{"symbol":"BTC","price":"$0","cssClass":"has-text-info","changePct":"0.0"}}]
  }
  var template = $('#charts').html()
  Mustache.parse(template)
  // build mstCoinList
  $('#watch-list').textContent += inCoinList;
  var rendered = Mustache.render(template, {mstCoinList:inCoinList})

  // turn off the spinner...
  $('#spinner').hide()
  // and load the table instead
  $('#target').html(rendered)

  // add remove functionality after table is rendered
  $("td[id^='rm-r_']").click(function(el) {
    var coin = $(this)[0].parentElement.id
    // console.log(coin)
    // remove coin from list
    var coins = $('#watch-list').text()
    // console.log('original list: ' + coins)
    coins = coins.replace(coin,'')
    // console.log('removed coin ' + coin + ', now have: ' + coins)
    coins = coins.replace(',,',',')
    // console.log('fixed an extra commas in the middle of the string: ' + coins)
    // informational only below
    // leaving in the trailing comma because our
    // add function acts as if it is there
    // coins = coins.replace(/,$/,'')
    // console.log('remove comma from eol: ' + coins)
    coins = coins.replace(/^,/,'')
    // console.log('remove comma from beg of line: ' + coins)
    $('#watch-list').text(coins)
    save_options()
  })
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
// function restore_options() {
//   chrome.storage.sync.get('currencies', function(items) {
//     if (!chrome.runtime.error) {
//       $('#watch-list').text(items.currencies)
//       fetchPrices(items.currencies);
//     }
//   });
// }

function restore_options() {
  chrome.storage.sync.get(function(items) {
    console.log(items)
    if (!chrome.runtime.error) {
      var coins = items.currencies
      var fiat = items.fiat
      var lang = items.lang
      var format = items.file_format
      if ( coins === undefined ) {
        coins = 'BTC'
      }
      if ( fiat === undefined){
        fiat = 'USD'
      }
      if (lang === undefined) {
          lang = 'en-US'
      }
      if (format === undefined){
        tmpData = {
          currencies: coins,
          fiat: fiat,
          lang: 'en-US',
          format: FILE_FORMAT
        }
        chrome.storage.sync.set(tmpData, function () {
          console.log('storage upgraded')
        })
      }
      $('#watch-list').text(coins)
      $('#watch-fiat').text(fiat +',' + lang)
      fetchPrices(coins, fiat);
    }
  });
}

function fetchPrices(symbols, fiat, lang) {
  const url = 'https://min-api.cryptocompare.com/data/pricemultifull?tsyms=' + fiat + '&fsyms=' + symbols
  console.log(url)
  const PLUS = "has-text-success"
  const MINUS = "has-text-danger"
  var coinArray = []
  axios.get(url).then(function(res){
    for (coin in res.data.RAW){
      coinArray.push(res.data.RAW[coin])
    }
    var renderArr = []
    for( var i = 0; i< coinArray.length; i++ ){
      // var chg = coinArray[i]['USD']['CHANGEPCT24HOUR']
      var cssCls = coinArray[i][fiat]['CHANGEPCT24HOUR'] >= 0 ? PLUS : MINUS
      var arrSymbol = coinArray[i][fiat]['FROMSYMBOL']
      var arrPrice = Number.parseFloat(coinArray[i][fiat]['PRICE']).toLocaleString(lang,{style: 'currency', currency: fiat})
      var arrChgPct = Number.parseFloat(coinArray[i][fiat]['CHANGEPCT24HOUR']).toFixed(2)
      renderArr.push({"symbol":arrSymbol,"price":arrPrice,"cssClass": cssCls, "changePct": arrChgPct})
    }
    loadTable(renderArr)
  }).catch(function(err){
    console.log(err)
  });
}

function save_options() {
  var currencies = $('#watch-list').text()
  var fiat = $('#watch-fiat').text()
  var idx = fiat.indexOf(",")
  var currency = fiat.substr(0,idx)
  var lang = fiat.substr(idx+1)
  console.log(currencies)
  var curr_sel = [currencies]
  console.log(curr_sel)
  var data = {
    'file_format': FILE_FORMAT,
    'currencies': curr_sel,
    'fiat': currency,
    'lang': lang
  }
  chrome.storage.sync.set(data, function() {
    fetchPrices(curr_sel, currency,lang)
  });
}
