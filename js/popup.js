const FILE_FORMAT = 'v2'

$(document).ready(function() {

  restore_options()

  var coinselect = $('#coinselect')

  $(coinselect).select2({
  //     data: [{id:'BTC', text:'Bitcoin'},
  //     {id:'ETH', text:'Ethereum'},
  //     {id:'LTC', text:'Litecoin'},
  //     {id:'BCH', text:'Bitcoin Cash'},
  //     {id:'XRP', text:'Ripple'},
  //     {id:'ACT', text:'Achain'},
  //     {id:'AEON', text:'Aeon'},
  //     {id:'ARK', text:'Ark'},
  //     {id:'XAS', text:'Asch'},
  //     {id:'BAY', text:'BitBay'},
  //     {id:'BTG', text:'Bitcoin Gold'},
  //     {id:'BTCD', text:'BitcoinDark'},
  //     {id:'BCC', text:'BitConnect'},
  //     {id:'BTX', text:'Bitcore'},
  //     {id:'BTS', text:'BitShares'},
  //     {id:'BLOCK', text:'Blocknet'},
  //     {id:'BCO', text:'BridgeCoin'},
  //     {id:'BURST', text:'Burst'},
  //     {id:'GBYTE', text:'Byteball Bytes'},
  //     {id:'BCN', text:'Bytecoin'},
  //     {id:'ADA', text:'Cardano'},
  //     {id:'CLOAK', text:'CloakCoin'},
  //     {id:'XCP', text:'Counterparty'},
  //     {id:'CRW', text:'Crown'},
  //     {id:'CNX', text:'Cryptonex'},
  //     {id:'DASH', text:'Dash'},
  //     {id:'DCT', text:'DECENT'},
  //     {id:'DCR', text:'Decred'},
  //     {id:'DGB', text:'DigiByte'},
  //     {id:'XDN', text:'DigitalNote'},
  //     {id:'DIME', text:'Dimecoin'},
  //     {id:'DOGE', text:'Dogecoin'},
  //     {id:'ECC', text:'ECC'},
  //     {id:'EMC2', text:'Einsteinium'},
  //     {id:'ECA', text:'Electra'},
  //     {id:'ETN', text:'Electroneum'},
  //     {id:'EMC', text:'Emercoin'},
  //     {id:'EOS', text:'EOS'},
  //     {id:'ETC', text:'Ethereum Classic'},
  //     {id:'XP', text:'Experience Points'},
  //     {id:'FCT', text:'Factom'},
  //     {id:'FTC', text:'Feathercoin'},
  //     {id:'FLASH', text:'Flash'},
  //     {id:'GAME', text:'GameCredits'},
  //     {id:'GRS', text:'Groestlcoin'},
  //     {id:'NLG', text:'Gulden'},
  //     {id:'GXS', text:'GXShares'},
  //     {id:'THC', text:'HempCoin'},
  //     {id:'HSR', text:'Hshare'},
  //     {id:'HTML', text:'HTMLCOIN'},
  //     {id:'IOC', text:'I/O Coin'},
  //     {id:'MIOTA', text:'IOTA'},
  //     {id:'KMD', text:'Komodo'},
  //     {id:'KCS', text:'KuCoin Shares'},
  //     {id:'LBC', text:'LBRY Credits'},
  //     {id:'LSK', text:'Lisk'},
  //     {id:'LKK', text:'Lykke'},
  //     {id:'ETP', text:'Metaverse ETP'},
  //     {id:'MNX', text:'MinexCoin'},
  //     {id:'MONA', text:'MonaCoin'},
  //     {id:'XMR', text:'Monero'},
  //     {id:'MOON', text:'Mooncoin'},
  //     {id:'NMC', text:'Namecoin'},
  //     {id:'NAV', text:'NAV Coin'},
  //     {id:'NEBL', text:'Neblio'},
  //     {id:'XEM', text:'NEM'},
  //     {id:'NEO', text:'NEO'},
  //     {id:'NXS', text:'Nexus'},
  //     {id:'NXT', text:'Nxt'},
  //     {id:'PAC', text:'PACcoin'},
  //     {id:'PART', text:'Particl'},
  //     {id:'PPC', text:'Peercoin'},
  //     {id:'PIVX', text:'PIVX'},
  //     {id:'PURA', text:'Pura'},
  //     {id:'QTUM', text:'Qtum'},
  //     {id:'XRB', text:'RaiBlocks'},
  //     {id:'RDD', text:'ReddCoin'},
  //     {id:'RISE', text:'Rise'},
  //     {id:'SLS', text:'SaluS'},
  //     {id:'XSH', text:'SHIELD'},
  //     {id:'SHIFT', text:'Shift'},
  //     {id:'SC', text:'Siacoin'},
  //     {id:'SKY', text:'Skycoin'},
  //     {id:'SMART', text:'SmartCash'},
  //     {id:'XSPEC', text:'Spectrecoin'},
  //     {id:'STEEM', text:'Steem'},
  //     {id:'XLM', text:'Stellar'},
  //     {id:'STRAT', text:'Stratis'},
  //     {id:'SYS', text:'Syscoin'},
  //     {id:'UBQ', text:'Ubiq'},
  //     {id:'VEN', text:'VeChain'},
  //     {id:'XVG', text:'Verge'},
  //     {id:'VTC', text:'Vertcoin'},
  //     {id:'VIA', text:'Viacoin'},
  //     {id:'VOX', text:'Voxels'},
  //     {id:'WAVES', text:'Waves'},
  //     {id:'XBY', text:'XTRABYTES'},
  //     {id:'ZEC', text:'Zcash'},
  //     {id:'ZCL', text:'ZClassic'},
  //     {id:'XZC', text:'ZCoin'},
  //     {id:'ZEN', text:'ZenCash'}],
      data: [
        {id: 'BTC', text:'Bitcoin'},
        {id: 'ETH', text:'Ethereum'},
        {id: 'XRP', text:'Ripple'},
        {id: 'BCH', text:'Bitcoin Cash'},
        {id: 'LTC', text:'Litecoin'},
        {id: '2GIVE', text:'2GIVE'},
        {id: '42', text:'42-coin'},
        {id: 'ACT', text:'Achain'},
        {id: 'ADZ', text:'Adzcoin'},
        {id: 'AEON', text:'Aeon'},
        {id: 'ALQO', text:'ALQO'},
        {id: 'ANC', text:'Anoncoin'},
        {id: 'ARDR', text:'Ardor'},
        {id: 'ARK', text:'Ark'},
        {id: 'ABY', text:'ArtByte'},
        {id: 'XAS', text:'Asch'},
        {id: 'AC', text:'AsiaCoin'},
        {id: 'ATB', text:'ATBCoin'},
        {id: 'ATMS', text:'Atmos'},
        {id: 'ADC', text:'AudioCoin'},
        {id: 'AUR', text:'Auroracoin'},
        {id: 'BITB', text:'Bean Cash'},
        {id: 'BELA', text:'Bela'},
        {id: 'BIS', text:'Bismuth'},
        {id: 'BAY', text:'BitBay'},
        {id: 'BTDX', text:'Bitcloud'},
        {id: 'BTG', text:'Bitcoin Gold'},
        {id: 'XBC', text:'Bitcoin Plus'},
        {id: 'BTCD', text:'BitcoinDark'},
        {id: 'BTCZ', text:'BitcoinZ'},
        {id: 'BCC', text:'BitConnect'},
        {id: 'BTX', text:'Bitcore'},
        {id: 'BDL', text:'Bitdeal'},
        {id: 'BTM', text:'Bitmark'},
        {id: 'BSD', text:'BitSend'},
        {id: 'BTS', text:'BitShares'},
        {id: 'ZNY', text:'Bitzeny'},
        {id: 'BLK', text:'BlackCoin'},
        {id: 'BLITZ', text:'Blitzcash'},
        {id: 'BLOCK', text:'Blocknet'},
        {id: 'BPL', text:'Blockpool'},
        {id: 'BLU', text:'BlueCoin'},
        {id: 'BBR', text:'Boolberry'},
        {id: 'BRX', text:'Breakout Stake'},
        {id: 'BRK', text:'Breakout'},
        {id: 'BCO', text:'BridgeCoin'},
        {id: 'BWK', text:'Bulwark'},
        {id: 'BUN', text:'BunnyCoin'},
        {id: 'BURST', text:'Burst'},
        {id: 'BUZZ', text:'BuzzCoin'},
        {id: 'GBYTE', text:'Byteball Bytes'},
        {id: 'BCN', text:'Bytecoin'},
        {id: 'CANN', text:'CannabisCoin'},
        {id: 'CARBON', text:'Carboncoin'},
        {id: 'ADA', text:'Cardano'},
        {id: 'CNT', text:'Centurion'},
        {id: 'CHC', text:'ChainCoin'},
        {id: 'CHIPS', text:'CHIPS'},
        {id: 'CLAM', text:'Clams'},
        {id: 'CLOAK', text:'CloakCoin'},
        {id: 'COLX', text:'ColossusCoinXT'},
        {id: 'RAIN', text:'Condensate'},
        {id: 'XCP', text:'Counterparty'},
        {id: 'CRM', text:'Cream'},
        {id: 'CREA', text:'Creativecoin'},
        {id: 'CRC', text:'CrowdCoin'},
        {id: 'CRW', text:'Crown'},
        {id: 'CBX', text:'Crypto Bullion'},
        {id: 'CNX', text:'Cryptonex'},
        {id: 'CURE', text:'Curecoin'},
        {id: 'DASH', text:'Dash'},
        {id: 'DCT', text:'DECENT'},
        {id: 'DCR', text:'Decred'},
        {id: 'ONION', text:'DeepOnion'},
        {id: 'DNR', text:'Denarius'},
        {id: 'DMD', text:'Diamond'},
        {id: 'DGB', text:'DigiByte'},
        {id: 'XDN', text:'DigitalNote'},
        {id: 'DP', text:'DigitalPrice'},
        {id: 'DIME', text:'Dimecoin'},
        {id: 'NOTE', text:'DNotes'},
        {id: 'DOGE', text:'Dogecoin'},
        {id: 'DOPE', text:'DopeCoin'},
        {id: 'DOT', text:'Dotcoin'},
        {id: 'DFT', text:'DraftCoin'},
        {id: 'DBIX', text:'DubaiCoin'},
        {id: 'DYN', text:'Dynamic'},
        {id: 'ECN', text:'E-coin'},
        {id: 'EDR', text:'E-Dinar Coin'},
        {id: 'EFL', text:'e-Gulden'},
        {id: 'EAC', text:'EarthCoin'},
        {id: 'EBST', text:'eBoost'},
        {id: 'ECC', text:'ECC'},
        {id: 'EMC2', text:'Einsteinium'},
        {id: 'XEL', text:'Elastic'},
        {id: 'ECA', text:'Electra'},
        {id: 'ETN', text:'Electroneum'},
        {id: 'ELE', text:'Elementrem'},
        {id: '1337', text:'Elite'},
        {id: 'ELLA', text:'Ellaism'},
        {id: 'EMC', text:'Emercoin'},
        {id: 'ENRG', text:'Energycoin'},
        {id: 'EQT', text:'EquiTrader'},
        {id: 'ESP', text:'Espers'},
        {id: 'ETC', text:'Ethereum Classic'},
        {id: 'ERC', text:'EuropeCoin'},
        {id: 'EGC', text:'EverGreenCoin'},
        {id: 'EXCL', text:'ExclusiveCoin'},
        {id: 'EXP', text:'Expanse'},
        {id: 'XP', text:'Experience Po...'},
        {id: 'FCT', text:'Factom'},
        {id: 'FAIR', text:'FairCoin'},
        {id: 'FTC', text:'Feathercoin'},
        {id: 'TIPS', text:'FedoraCoin'},
        {id: 'FRST', text:'FirstCoin'},
        {id: 'FLASH', text:'Flash'},
        {id: 'FLO', text:'FlorinCoin'},
        {id: 'XFT', text:'Footy Cash'},
        {id: 'FOR', text:'FORCE'},
        {id: 'GAM', text:'Gambit'},
        {id: 'GAME', text:'GameCredits'},
        {id: 'GCN', text:'GCN Coin'},
        {id: 'GCR', text:'Global Curren...'},
        {id: 'GBX', text:'GoByte'},
        {id: 'GLD', text:'GoldCoin'},
        {id: 'GOLOS', text:'Golos'},
        {id: 'GRE', text:'Greencoin'},
        {id: 'GRC', text:'GridCoin'},
        {id: 'GRS', text:'Groestlcoin'},
        {id: 'NLG', text:'Gulden'},
        {id: 'GXS', text:'GXShares'},
        {id: 'HEAT', text:'HEAT'},
        {id: 'THC', text:'HempCoin'},
        {id: 'HWC', text:'HollyWoodCoin'},
        {id: 'HSR', text:'Hshare'},
        {id: 'HTML', text:'HTMLCOIN'},
        {id: 'HUC', text:'HunterCoin'},
        {id: 'HUSH', text:'Hush'},
        {id: 'HYP', text:'HyperStake'},
        {id: 'IOC', text:'I/O Coin'},
        {id: 'NKA', text:'IncaKoin'},
        {id: 'IFLT', text:'InflationCoin'},
        {id: 'INN', text:'Innova'},
        {id: 'ITNS', text:'IntenseCoin'},
        {id: 'IOP', text:'Internet of P...'},
        {id: 'HOLD', text:'Interstellar ...'},
        {id: 'ION', text:'ION'},
        {id: 'MIOTA', text:'IOTA'},
        {id: 'IXC', text:'Ixcoin'},
        {id: 'KRB', text:'Karbo'},
        {id: 'KLC', text:'KiloCoin'},
        {id: 'KMD', text:'Komodo'},
        {id: 'KORE', text:'Kore'},
        {id: 'KCS', text:'KuCoin Shares'},
        {id: 'LBC', text:'LBRY Credits'},
        {id: 'LEO', text:'LEOcoin'},
        {id: 'XLC', text:'LeviarCoin'},
        {id: 'LINDA', text:'Linda'},
        {id: 'LSK', text:'Lisk'},
        {id: 'LDOGE', text:'LiteDoge'},
        {id: 'LMC', text:'LoMoCoin'},
        {id: 'BASH', text:'LuckChain'},
        {id: 'LUX', text:'LUXCoin'},
        {id: 'LKK', text:'Lykke'},
        {id: 'XMG', text:'Magi'},
        {id: 'MAGE', text:'MagicCoin'},
        {id: 'MAG', text:'Magnet'},
        {id: 'MXT', text:'MarteXcoin'},
        {id: 'MTNC', text:'Masternodecoin'},
        {id: 'MEME', text:'Memetic / Pep...'},
        {id: 'ETP', text:'Metaverse ETP'},
        {id: 'MNX', text:'MinexCoin'},
        {id: 'MINT', text:'Mintcoin'},
        {id: 'MOIN', text:'Moin'},
        {id: 'MONA', text:'MonaCoin'},
        {id: 'XMR', text:'Monero'},
        {id: 'MUE', text:'MonetaryUnit'},
        {id: 'MONK', text:'Monkey Project'},
        {id: 'XMCC', text:'Monoeci'},
        {id: 'MOON', text:'Mooncoin'},
        {id: 'MUSIC', text:'Musicoin'},
        {id: 'XMY', text:'Myriad'},
        {id: 'NMC', text:'Namecoin'},
        {id: 'NAV', text:'NAV Coin'},
        {id: 'NEBL', text:'Neblio'},
        {id: 'XEM', text:'NEM'},
        {id: 'NEO', text:'NEO'},
        {id: 'NEOS', text:'NeosCoin'},
        {id: 'NTRN', text:'Neutron'},
        {id: 'NYC', text:'NewYorkCoin'},
        {id: 'NXS', text:'Nexus'},
        {id: 'NOBL', text:'NobleCoin'},
        {id: 'NLC2', text:'NoLimitCoin'},
        {id: 'NVC', text:'Novacoin'},
        {id: 'USNBT', text:'NuBits'},
        {id: 'NXT', text:'Nxt'},
        {id: 'ODN', text:'Obsidian'},
        {id: 'OK', text:'OKCash'},
        {id: 'OMNI', text:'Omni'},
        {id: 'OPC', text:'OP Coin'},
        {id: 'OXY', text:'Oxycoin'},
        {id: 'PAC', text:'PACcoin'},
        {id: 'PND', text:'Pandacoin'},
        {id: 'PKB', text:'ParkByte'},
        {id: 'PART', text:'Particl'},
        {id: 'PASC', text:'Pascal Coin'},
        {id: 'PPC', text:'Peercoin'},
        {id: 'PPY', text:'Peerplays'},
        {id: 'PTC', text:'Pesetacoin'},
        {id: 'PHR', text:'Phore'},
        {id: 'PHO', text:'Photon'},
        {id: 'PINK', text:'PinkCoin'},
        {id: 'PIRL', text:'Pirl'},
        {id: 'PIVX', text:'PIVX'},
        {id: 'POLIS', text:'Polis'},
        {id: 'POSW', text:'PoSW Coin'},
        {id: 'POT', text:'PotCoin'},
        {id: 'XPM', text:'Primecoin'},
        {id: 'PZM', text:'PRIZM'},
        {id: 'PROC', text:'ProCurrency'},
        {id: 'PURA', text:'Pura'},
        {id: 'PURE', text:'Pure'},
        {id: 'PUT', text:'PutinCoin'},
        {id: 'QBIC', text:'Qbic'},
        {id: 'QTUM', text:'Qtum'},
        {id: 'QRK', text:'Quark'},
        {id: 'RADS', text:'Radium'},
        {id: 'XRB', text:'RaiBlocks'},
        {id: 'RDD', text:'ReddCoin'},
        {id: 'REC', text:'Regalcoin'},
        {id: 'RNS', text:'Renos'},
        {id: 'RIC', text:'Riecoin'},
        {id: 'RISE', text:'Rise'},
        {id: 'RBY', text:'Rubycoin'},
        {id: 'RUP', text:'Rupee'},
        {id: 'RC', text:'RussiaCoin'},
        {id: 'RMC', text:'Russian Miner...'},
        {id: 'SLS', text:'SaluS'},
        {id: 'SEQ', text:'Sequence'},
        {id: 'SXC', text:'Sexcoin'},
        {id: 'XSH', text:'SHIELD'},
        {id: 'SHIFT', text:'Shift'},
        {id: 'SC', text:'Siacoin'},
        {id: 'SIB', text:'SIBCoin'},
        {id: 'SKY', text:'Skycoin'},
        {id: 'SMART', text:'SmartCash'},
        {id: 'SMLY', text:'SmileyCoin'},
        {id: 'SEND', text:'Social Send'},
        {id: 'SLR', text:'SolarCoin'},
        {id: 'XLR', text:'Solaris'},
        {id: 'XSPEC', text:'Spectrecoin'},
        {id: 'SPHR', text:'Sphere'},
        {id: 'SPR', text:'SpreadCoin'},
        {id: 'SPRTS', text:'Sprouts'},
        {id: 'START', text:'Startcoin'},
        {id: 'XST', text:'Stealthcoin'},
        {id: 'SBD', text:'Steem Dollars'},
        {id: 'STEEM', text:'Steem'},
        {id: 'XLM', text:'Stellar'},
        {id: 'STAK', text:'STRAKS'},
        {id: 'STRAT', text:'Stratis'},
        {id: 'SUMO', text:'Sumokoin'},
        {id: 'SYNX', text:'Syndicate'},
        {id: 'SNRG', text:'Synergy'},
        {id: 'SYS', text:'Syscoin'},
        {id: 'XTO', text:'Tao'},
        {id: 'TRC', text:'Terracoin'},
        {id: 'TES', text:'TeslaCoin'},
        {id: 'XTZ', text: 'Tezos'},
        {id: 'TCC', text:'The ChampCoin'},
        {id: 'TOA', text:'ToaCoin'},
        {id: 'TX', text:'TransferCoin'},
        {id: 'TZC', text:'TrezarCoin'},
        {id: 'TRUST', text:'TrustPlus'},
        {id: 'UBQ', text:'Ubiq'},
        {id: 'UFO', text:'UFO Coin'},
        {id: 'UNIT', text:'Universal Cur...'},
        {id: 'UNO', text:'Unobtanium'},
        {id: 'XVC', text:'Vcash'},
        {id: 'XVG', text:'Verge'},
        {id: 'VRC', text:'VeriCoin'},
        {id: 'VRM', text:'VeriumReserve'},
        {id: 'VTC', text:'Vertcoin'},
        {id: 'VIA', text:'Viacoin'},
        {id: 'VIVO', text:'VIVO'},
        {id: 'VOX', text:'Voxels'},
        {id: 'VSX', text:'Vsync'},
        {id: 'VTR', text:'vTorrent'},
        {id: 'WAVES', text:'Waves'},
        {id: 'XWC', text:'WhiteCoin'},
        {id: 'XGOX', text:'XGOX'},
        {id: 'XBY', text:'XTRABYTES'},
        {id: 'YOC', text:'Yocoin'},
        {id: 'ZEC', text:'Zcash'},
        {id: 'ZCL', text:'ZClassic'},
        {id: 'XZC', text:'ZCoin'},
        {id: 'ZEIT', text:'Zeitcoin'},
        {id: 'ZEN', text:'ZenCash'},
        {id: 'ZEPH', text:'Zephyr'},
        {id: 'ZER', text:'Zero'},
        {id: 'ZOI', text:'Zoin'}
      ],
      placeholder: 'Select a currency',
      allowClear: true,
      width: '100%',
      multiple: true,
      templateSelection: formatCoin,
      templateResult: formatCoin
      // matcher: matchCustom
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

// function matchCustom(params, data) {
//   console.log('match params: ' + params.term)
//   if ($.trim(params.term) === '') {
//     return data;
//   }
//   if (typeof data.text === undefined) {
//     return null
//   }
//   if (params.term === data.id || params.term === data.text) {
//     return data.text
//   }
//   return null
// }


function formatCoin (coin) {
  if (!coin.id) {
    return coin.text;
  }
  var $coin = $('<i class="cc ' + coin.element.value + '"> '  + coin.text + '</i>');
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
    var coins = $('#watch-list').text()
    coins = coins.replace(coin,'')
    coins = coins.replace(',,',',')
    coins = coins.replace(/^,/,'')
    $('#watch-list').text(coins)
    save_options()
  })
}

function restore_options() {
  chrome.storage.sync.get(function(items) {
    console.log(items)
    if (!chrome.runtime.error) {
      var coins = items.currencies
      var fiat = items.fiat
      var lang = items.lang
      var format = items.file_format
      if ( coins === undefined ) {
        coins = 'BTC,'
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
    'format': FILE_FORMAT,
    'currencies': curr_sel,
    'fiat': currency,
    'lang': lang
  }
  chrome.storage.sync.set(data, function() {
    fetchPrices(curr_sel, currency,lang)
  });
}
