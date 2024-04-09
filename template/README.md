# iNFT editor

## Request
- http://127.0.0.1:8066/?canisterId=bw4dl-smaaa-aaaaa-qaacq-cai&id=br5f7-7uaaa-aaaaa-qaaca-cai

    ```BASH
        #command
        curl -X POST http://bw4dl-smaaa-aaaaa-qaacq-cai.localhost:8066/template -H "Content-type: application/json" -d @tpl.json
        
        curl -X POST http://bw4dl-smaaa-aaaaa-qaacq-cai.localhost:8066/template -H "Content-type: application/json" -d '{"title": "todo list", "difinition": "some important things"}'
        #Result
        {"id":"b458518d-e851-4ffa-b6dd-133809c0fe1c","createdAt":"2024-04-09T04:32:32.514Z","title":"todo list","body":"some important things","attachmentURL":"url/path/to/some/photo/attachment"}
    ```