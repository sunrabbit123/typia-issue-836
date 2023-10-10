# Typia issue 836 repository

Desktop % curl -X POST http://localhost:37001/bbs -d '{"telegramId": 654321,"mainAddress": "0x63Db149B1339a054AE67aD80dB7eCe1e11111111"}' -H "Content-Type: application/json" 

-> {"telegramId":654321,"mainAddress":"0x63Db149B1339a054AE67aD80dB7eCe1e11111111"}

--- 

Desktop % curl -X POST http://localhost:37001/bbs -d '{"telegramId": 654321,"mainAddress": "0x63Db149B1339a054AE67aD80dB7eCe1e"}' -H "Content-Type: application/json"  

-> {"path":"$input.mainAddress","reason":"Error on typia.assert(): invalid type on $input.mainAddress, expect to be string & H160","expected":"string & H160","value":"0x63Db149B1339a054AE67aD80dB7eCe1e","message":"Request body data is not following the promised type."}
