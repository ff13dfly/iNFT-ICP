# iNFT-ICP
ICP hack house project, try to deploy the editor of iNFT on ICP.


## Resource

### How to

- Set up the env for ICP. There is details about the installaction here [https://dacade.org/zh/communities/icp/courses/typescript-smart-contract-101/learning-modules/b14741ea-ee33-43a4-a742-9cdc0a6f0d1c](https://dacade.org/zh/communities/icp/courses/typescript-smart-contract-101/learning-modules/b14741ea-ee33-43a4-a742-9cdc0a6f0d1c). Note, the `DFX` installaction need you to press `Enter` on `Proceed with installation (default)`, it is better to `Proceed with installation (press Enter to continue)`. I am waiting here for more than 15 mins, haha. And, use arrow button to select the menu.

    ```BASH
        sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"
    ```

- On my macbook, the command can not run directly. The bin files are here `/Users/{YOUR_MACBOOK_USER_NAME}/Library/Application Support/org.dfinity.dfx/bin`. Change to this folder, run `./dfx --version` to confirm the application run properly.

- Try to start the server to check. Note, the `command + c` way can not stop the  

    ```BASH
        # normal suggestion.
        dfx start --host 127.0.0.1:8000

        # at your first time to start, there will be information to tell you add --clean flag
        # this is used to fresh the StableBTreeMap by force
        dfx start --host 127.0.0.1:8000 --clean
    ```

    ```BASH
        Running dfx start for version 0.16.1
        Using the default definition for the 'local' shared network because /Users/<username>/.config/dfx/networks.json does not exist.
        Dashboard: http://localhost:49846/_/dashboard
    ```

- 

### Links

- [https://internetcomputer.org/docs](https://internetcomputer.org/docs)

- [https://dacade.org/zh/communities/icp/courses/typescript-smart-contract-101/learning-modules/b14741ea-ee33-43a4-a742-9cdc0a6f0d1c](https://dacade.org/zh/communities/icp/courses/typescript-smart-contract-101/learning-modules/b14741ea-ee33-43a4-a742-9cdc0a6f0d1c)