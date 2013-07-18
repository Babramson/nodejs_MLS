Node.js+cURL Template for MLS Connecting
========

This is a basic node.js connection template to be used as a starting point in MLS RETS/DMQL connection development.

The template utilizes cURL and the native child_process module inside node.js. No additional modules are necessary to run as is, however this template is used for initial connection testing to an MLS data store. Additional development and modules will obviously be necessary to progress beyond this template with the same approach of using cURL for the heavy lifting.

Since MLS providers vary widely in terms of RETS versions, server environments (architecture, OS, etc.), URI connection strings and available RETS commands, I use this simple app as a jumping off point for new MLS connection development. 

>*NOTE*: I **strongly** recommend the use of [RETS M.D.](http://retsmd.com) for schema abstraction from your MLS provider for initial design stages of connection development. For the paranoid, you can fork Troy Davisson's [RETS M.D.](https://github.com/troydavisson/RETS-MD) repo and run it yourself.

Some simple examples of how this template can be used (and I stress simple).
-----
#### Get Metadata from MLS provider and save to XML file
`curl --digest --user-agent "cURLConnection/0.1" -o /tmp/metadata.xml --show-error --dump-header /tmp/headers.txt -u "(mlsUser):(mlsPass)" --header "RETS-Version: (ex: RETS/1.7.2)" --cookie-jar /tmp/cookies.txt --cookie /tmp/cookies.txt --data Type=METADATA-SYSTEM --data ID=\* --data Format=COMPACT "http://(mlsURI)/(sub)/(metadata.ext)"`

#### Search out MLS records with **active** status, a **listing price** that is equal to or greater than $450,000, limit the results to 100 and save to XML file
`curl --digest --user-agent "cURLConnection/0.1" -o "/tmp/results.xml" --show-error --dump-header /tmp/headers.txt -u "(mlsUser):(mlsPass)" --header "RETS-Version: (ex: RETS/1.7.2)" --cookie-jar /tmp/cookies.txt --cookie /tmp/cookies.txt --data Format=STANDARD-XML --data SearchType=(MLS Server Resource; ex: Property) --data Class=(MLS Server Class; ex: Residential, Lease, Commercial) --data StandardNames=0 --data QueryType=DMQL2 --data Limit=100 --data Query="(ListPrice=450000+),(Status=A)" "http://(mlsURI)/(sub)/(search.ext)"`

For better understanding of the options available to use with the cURL `Query` string, refer to the specific DMQL command list (usually DMQL2) for the RETS version your MLS provider is using. In the example above, the `--data QueryType` is indicating DMQL2. A nutshell reference for DMQL can be found [here](https://www.flexmls.com/developers/rets/tutorials/dmql-tutorial/).
