/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type {
  DonationPlatformContract,
  DonationPlatformContractInterface,
} from "../DonationPlatformContract";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "admistrator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "campaignsAddress",
        type: "address",
      },
    ],
    name: "CampaignCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "CAMPAIGN_CREATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "campaignsAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_campaignReceiver",
        type: "address",
      },
      {
        internalType: "string",
        name: "_campaignIpfs",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_amountRequesting",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_campaignEndTime",
        type: "uint256",
      },
    ],
    name: "createCampaign",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getReceiverCampaignByIndex",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "getReceiverCampaignsSize",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50620000276000801b336200005f60201b60201c565b620000597fab702d5d56cb720f4a9e68c16fba520a54ab91ef57a22d31e6281b540f07aee1336200015060201b60201c565b620001d8565b6200007182826200016660201b60201c565b6200014c57600160008084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550620000f1620001d060201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b6200016282826200005f60201b60201c565b5050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b613b0280620001e86000396000f3fe60806040523480156200001157600080fd5b5060043610620000c45760003560e01c80638a4b5fb8116200007b5780638a4b5fb814620001e157806390f9f50c146200021757806391d148541462000237578063a217fddf146200026d578063d547741f146200028f578063dd44471814620002af57620000c4565b806301ffc9a714620000c95780631add516314620000ff578063248a9ca314620001355780632f2ff15d146200016b57806336568abe146200018b5780635ee2dc5d14620001ab575b600080fd5b620000e76004803603810190620000e1919062001032565b620002d1565b604051620000f6919062001081565b60405180910390f35b6200011d60048036038101906200011791906200113e565b6200034e565b6040516200012c919062001196565b60405180910390f35b6200015360048036038101906200014d9190620011ee565b6200039d565b60405162000162919062001231565b60405180910390f35b6200018960048036038101906200018391906200124e565b620003bc565b005b620001a96004803603810190620001a391906200124e565b620003e3565b005b620001c96004803603810190620001c3919062001295565b6200046d565b604051620001d89190620012d8565b60405180910390f35b620001ff6004803603810190620001f991906200113e565b620004b9565b6040516200020e919062001196565b60405180910390f35b6200023560048036038101906200022f919062001457565b62000559565b005b6200025560048036038101906200024f91906200124e565b62000988565b60405162000264919062001081565b60405180910390f35b62000277620009f2565b60405162000286919062001231565b60405180910390f35b620002ad6004803603810190620002a791906200124e565b620009f9565b005b620002b962000a20565b604051620002c8919062001231565b60405180910390f35b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480620003475750620003468262000a44565b5b9050919050565b600260205281600052604060002081815481106200036b57600080fd5b906000526020600020016000915091509054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000838152602001908152602001600020600101549050919050565b620003c7826200039d565b620003d28162000aae565b620003de838362000ac6565b505050565b620003ed62000bab565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146200045d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000454906200156f565b60405180910390fd5b62000469828262000bb3565b5050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509050919050565b6000620004c6836200046d565b8210620004d257600080fd5b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811062000526576200052562001591565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905092915050565b6000801b620005688162000aae565b620005947fab702d5d56cb720f4a9e68c16fba520a54ab91ef57a22d31e6281b540f07aee18662000988565b620005d6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620005cd9062001610565b60405180910390fd5b6000620005e3866200046d565b90506000811115620007c7576000600260008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001836200063f919062001661565b8154811062000653576200065262001591565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060018173ffffffffffffffffffffffffffffffffffffffff166312498a706040518163ffffffff1660e01b8152600401602060405180830381865afa158015620006ce573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620006f49190620016b3565b620007009190620016e5565b421180156200077e57508073ffffffffffffffffffffffffffffffffffffffff166360f5ac866040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000756573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200077c919062001751565b155b620007c0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620007b790620017d3565b60405180910390fd5b506200082b565b6001869080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b6000868686866040516200083f9062000fb3565b6200084e94939291906200186d565b604051809103906000f0801580156200086b573d6000803e3d6000fd5b509050600260008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f1260f646519b6441128edda4528afcfbcf3e46959be8f7c3d85d50f62eda7c6860405160405180910390a450505050505050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000801b81565b62000a04826200039d565b62000a0f8162000aae565b62000a1b838362000bb3565b505050565b7fab702d5d56cb720f4a9e68c16fba520a54ab91ef57a22d31e6281b540f07aee181565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b62000ac38162000abd62000bab565b62000c99565b50565b62000ad2828262000988565b62000ba757600160008084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555062000b4c62000bab565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600033905090565b62000bbf828262000988565b1562000c9557600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555062000c3a62000bab565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b62000ca5828262000988565b62000d255762000cb58162000d29565b62000cc58360001c602062000d58565b60405160200162000cd8929190620019a3565b6040516020818303038152906040526040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000d1c9190620019e5565b60405180910390fd5b5050565b606062000d518273ffffffffffffffffffffffffffffffffffffffff16601460ff1662000d58565b9050919050565b60606000600283600262000d6d919062001a09565b62000d799190620016e5565b67ffffffffffffffff81111562000d955762000d9462001310565b5b6040519080825280601f01601f19166020018201604052801562000dc85781602001600182028036833780820191505090505b5090507f30000000000000000000000000000000000000000000000000000000000000008160008151811062000e035762000e0262001591565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811062000e6a5762000e6962001591565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506000600184600262000eac919062001a09565b62000eb89190620016e5565b90505b600181111562000f62577f3031323334353637383961626364656600000000000000000000000000000000600f86166010811062000efe5762000efd62001591565b5b1a60f81b82828151811062000f185762000f1762001591565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c94508062000f5a9062001a54565b905062000ebb565b506000841462000fa9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000fa09062001ad2565b60405180910390fd5b8091505092915050565b611fd88062001af583390190565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6200100c8162000fd5565b81146200101857600080fd5b50565b6000813590506200102c8162001001565b92915050565b6000602082840312156200104b576200104a62000fcb565b5b60006200105b848285016200101b565b91505092915050565b60008115159050919050565b6200107b8162001064565b82525050565b600060208201905062001098600083018462001070565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620010cb826200109e565b9050919050565b620010dd81620010be565b8114620010e957600080fd5b50565b600081359050620010fd81620010d2565b92915050565b6000819050919050565b620011188162001103565b81146200112457600080fd5b50565b60008135905062001138816200110d565b92915050565b6000806040838503121562001158576200115762000fcb565b5b60006200116885828601620010ec565b92505060206200117b8582860162001127565b9150509250929050565b6200119081620010be565b82525050565b6000602082019050620011ad600083018462001185565b92915050565b6000819050919050565b620011c881620011b3565b8114620011d457600080fd5b50565b600081359050620011e881620011bd565b92915050565b60006020828403121562001207576200120662000fcb565b5b60006200121784828501620011d7565b91505092915050565b6200122b81620011b3565b82525050565b600060208201905062001248600083018462001220565b92915050565b6000806040838503121562001268576200126762000fcb565b5b60006200127885828601620011d7565b92505060206200128b85828601620010ec565b9150509250929050565b600060208284031215620012ae57620012ad62000fcb565b5b6000620012be84828501620010ec565b91505092915050565b620012d28162001103565b82525050565b6000602082019050620012ef6000830184620012c7565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200134a82620012ff565b810181811067ffffffffffffffff821117156200136c576200136b62001310565b5b80604052505050565b60006200138162000fc1565b90506200138f82826200133f565b919050565b600067ffffffffffffffff821115620013b257620013b162001310565b5b620013bd82620012ff565b9050602081019050919050565b82818337600083830152505050565b6000620013f0620013ea8462001394565b62001375565b9050828152602081018484840111156200140f576200140e620012fa565b5b6200141c848285620013ca565b509392505050565b600082601f8301126200143c576200143b620012f5565b5b81356200144e848260208601620013d9565b91505092915050565b6000806000806080858703121562001474576200147362000fcb565b5b60006200148487828801620010ec565b945050602085013567ffffffffffffffff811115620014a857620014a762000fd0565b5b620014b68782880162001424565b9350506040620014c98782880162001127565b9250506060620014dc8782880162001127565b91505092959194509250565b600082825260208201905092915050565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b600062001557602f83620014e8565b91506200156482620014f9565b604082019050919050565b600060208201905081810360008301526200158a8162001548565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f5265636569766572206e6f7420636f6e6669726d656400000000000000000000600082015250565b6000620015f8601683620014e8565b91506200160582620015c0565b602082019050919050565b600060208201905081810360008301526200162b81620015e9565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006200166e8262001103565b91506200167b8362001103565b925082820390508181111562001696576200169562001632565b5b92915050565b600081519050620016ad816200110d565b92915050565b600060208284031215620016cc57620016cb62000fcb565b5b6000620016dc848285016200169c565b91505092915050565b6000620016f28262001103565b9150620016ff8362001103565b92508282019050808211156200171a576200171962001632565b5b92915050565b6200172b8162001064565b81146200173757600080fd5b50565b6000815190506200174b8162001720565b92915050565b6000602082840312156200176a576200176962000fcb565b5b60006200177a848285016200173a565b91505092915050565b7f43616e74206372656174652061206e65772063616d706169676e207965740000600082015250565b6000620017bb601e83620014e8565b9150620017c88262001783565b602082019050919050565b60006020820190508181036000830152620017ee81620017ac565b9050919050565b600081519050919050565b60005b838110156200182057808201518184015260208101905062001803565b60008484015250505050565b60006200183982620017f5565b620018458185620014e8565b93506200185781856020860162001800565b6200186281620012ff565b840191505092915050565b600060808201905062001884600083018762001185565b81810360208301526200189881866200182c565b9050620018a96040830185620012c7565b620018b86060830184620012c7565b95945050505050565b600081905092915050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b600062001904601783620018c1565b91506200191182620018cc565b601782019050919050565b60006200192982620017f5565b620019358185620018c1565b93506200194781856020860162001800565b80840191505092915050565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b60006200198b601183620018c1565b9150620019988262001953565b601182019050919050565b6000620019b082620018f5565b9150620019be82856200191c565b9150620019cb826200197c565b9150620019d982846200191c565b91508190509392505050565b6000602082019050818103600083015262001a0181846200182c565b905092915050565b600062001a168262001103565b915062001a238362001103565b925082820262001a338162001103565b9150828204841483151762001a4d5762001a4c62001632565b5b5092915050565b600062001a618262001103565b91506000820362001a775762001a7662001632565b5b600182039050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b600062001aba602083620014e8565b915062001ac78262001a82565b602082019050919050565b6000602082019050818103600083015262001aed8162001aab565b905091905056fe60806040526001600560006101000a81548160ff0219169083151502179055506000600560016101000a81548160ff0219169083151502179055503480156200004757600080fd5b5060405162001fd838038062001fd883398181016040528101906200006d91906200041f565b80603c426200007d9190620004df565b8111620000c1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000b890620005a1565b60405180910390fd5b6000831162000107576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000fe9062000639565b60405180910390fd5b8473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16036200014057600080fd5b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508360029081620001d291906200089c565b508260038190555081600481905550505050505062000983565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200022d8262000200565b9050919050565b6200023f8162000220565b81146200024b57600080fd5b50565b6000815190506200025f8162000234565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620002ba826200026f565b810181811067ffffffffffffffff82111715620002dc57620002db62000280565b5b80604052505050565b6000620002f1620001ec565b9050620002ff8282620002af565b919050565b600067ffffffffffffffff82111562000322576200032162000280565b5b6200032d826200026f565b9050602081019050919050565b60005b838110156200035a5780820151818401526020810190506200033d565b60008484015250505050565b60006200037d620003778462000304565b620002e5565b9050828152602081018484840111156200039c576200039b6200026a565b5b620003a98482856200033a565b509392505050565b600082601f830112620003c957620003c862000265565b5b8151620003db84826020860162000366565b91505092915050565b6000819050919050565b620003f981620003e4565b81146200040557600080fd5b50565b6000815190506200041981620003ee565b92915050565b600080600080608085870312156200043c576200043b620001f6565b5b60006200044c878288016200024e565b945050602085015167ffffffffffffffff81111562000470576200046f620001fb565b5b6200047e87828801620003b1565b9350506040620004918782880162000408565b9250506060620004a48782880162000408565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620004ec82620003e4565b9150620004f983620003e4565b9250828201905080821115620005145762000513620004b0565b5b92915050565b600082825260208201905092915050565b7f43616d706169676e206d757374206265206c69766520666f72206174206c656160008201527f737420323420686f757273000000000000000000000000000000000000000000602082015250565b600062000589602b836200051a565b915062000596826200052b565b604082019050919050565b60006020820190508181036000830152620005bc816200057a565b9050919050565b7f54686520616d6f756e7420726571756573746564206d7573742062652067726560008201527f61746572207468616e207a65726f000000000000000000000000000000000000602082015250565b600062000621602e836200051a565b91506200062e82620005c3565b604082019050919050565b60006020820190508181036000830152620006548162000612565b9050919050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620006ae57607f821691505b602082108103620006c457620006c362000666565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200072e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620006ef565b6200073a8683620006ef565b95508019841693508086168417925050509392505050565b6000819050919050565b60006200077d620007776200077184620003e4565b62000752565b620003e4565b9050919050565b6000819050919050565b62000799836200075c565b620007b1620007a88262000784565b848454620006fc565b825550505050565b600090565b620007c8620007b9565b620007d58184846200078e565b505050565b5b81811015620007fd57620007f1600082620007be565b600181019050620007db565b5050565b601f8211156200084c576200081681620006ca565b6200082184620006df565b8101602085101562000831578190505b620008496200084085620006df565b830182620007da565b50505b505050565b600082821c905092915050565b6000620008716000198460080262000851565b1980831691505092915050565b60006200088c83836200085e565b9150826002028217905092915050565b620008a7826200065b565b67ffffffffffffffff811115620008c357620008c262000280565b5b620008cf825462000695565b620008dc82828562000801565b600060209050601f831160018114620009145760008415620008ff578287015190505b6200090b85826200087e565b8655506200097b565b601f1984166200092486620006ca565b60005b828110156200094e5784890151825560018201915060208501945060208101905062000927565b868310156200096e57848901516200096a601f8916826200085e565b8355505b6001600288020188555050505b505050505050565b61164580620009936000396000f3fe6080604052600436106100f75760003560e01c8063cc2c193a1161008a578063d7557f1811610059578063d7557f1814610464578063d989a6ce1461047b578063ed88c68e146104b9578063f05cb12e146104c357610279565b8063cc2c193a146103c7578063cc6cb19a146103f2578063ce1b088a1461042f578063ce845d1d1461043957610279565b806362d6fe00116100c657806362d6fe0014610309578063aab9caa414610334578063ac62f5661461035f578063accc58001461039c57610279565b80631182b1791461027e57806312498a70146102a9578063590e1ae3146102d457806360f5ac86146102de57610279565b3661027957600560009054906101000a900460ff168015610119575060045442105b610158576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161014f90610d74565b60405180910390fd5b6000341161019b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161019290610e06565b60405180910390fd5b60006101a56104ee565b9050803411156101ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101e190610e98565b60405180910390fd5b34600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546102399190610ef1565b925050819055507f8e7cfdefcf8c12f8dccd26c94f385f22d656f8eafef6e8703d3b50a19dddf89d3460405161026f9190610f34565b60405180910390a1005b600080fd5b34801561028a57600080fd5b5061029361050a565b6040516102a09190610f34565b60405180910390f35b3480156102b557600080fd5b506102be610510565b6040516102cb9190610f34565b60405180910390f35b6102dc610516565b005b3480156102ea57600080fd5b506102f36106cc565b6040516103009190610f6a565b60405180910390f35b34801561031557600080fd5b5061031e6106df565b60405161032b9190611004565b60405180910390f35b34801561034057600080fd5b5061034961076d565b6040516103569190611067565b60405180910390f35b34801561036b57600080fd5b50610386600480360381019061038191906110b3565b610791565b6040516103939190611067565b60405180910390f35b3480156103a857600080fd5b506103b16107d0565b6040516103be9190611067565b60405180910390f35b3480156103d357600080fd5b506103dc6107f6565b6040516103e99190610f6a565b60405180910390f35b3480156103fe57600080fd5b506104196004803603810190610414919061110c565b610809565b6040516104269190610f34565b60405180910390f35b610437610821565b005b34801561044557600080fd5b5061044e6109bb565b60405161045b9190610f34565b60405180910390f35b34801561047057600080fd5b506104796109c3565b005b34801561048757600080fd5b506104a2600480360381019061049d9190611172565b610aa8565b6040516104b09291906111b2565b60405180910390f35b6104c1610add565b005b3480156104cf57600080fd5b506104d86104ee565b6040516104e59190610f34565b60405180910390f35b60006104f86109bb565b60035461050591906111db565b905090565b60035481565b60045481565b600560009054906101000a900460ff1615610566576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055d9061125b565b60405180910390fd5b600560019054906101000a900460ff16156105b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ad906112ed565b60405180910390fd5b6000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060008111610682576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067990611359565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156106c8573d6000803e3d6000fd5b5050565b600560009054906101000a900460ff1681565b600280546106ec906113a8565b80601f0160208091040260200160405190810160405280929190818152602001828054610718906113a8565b80156107655780601f1061073a57610100808354040283529160200191610765565b820191906000526020600020905b81548152906001019060200180831161074857829003601f168201915b505050505081565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600681815481106107a157600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600560019054906101000a900460ff1681565b60076020528060005260406000206000915090505481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146108b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a890611425565b60405180910390fd5b600560009054906101000a900460ff1615610901576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f89061125b565b60405180910390fd5b600560019054906101000a900460ff16610950576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610947906114b7565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f193505050501580156109b8573d6000803e3d6000fd5b50565b600047905090565b600560009054906101000a900460ff16610a12576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a0990611523565b60405180910390fd5b6003544714600560016101000a81548160ff021916908315150217905550600560019054906101000a900460ff1680610a4c575060045442115b610a8b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a829061158f565b60405180910390fd5b6000600560006101000a81548160ff021916908315150217905550565b60008060008360ff1685610abc91906115de565b905060008186610acc91906111db565b905080829350935050509250929050565b600560009054906101000a900460ff168015610afa575060045442105b610b39576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b3090610d74565b60405180910390fd5b60003411610b7c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b7390610e06565b60405180910390fd5b610b846104ee565b341115610bc6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bbd90610e98565b60405180910390fd5b6000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205403610c71576006339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b34600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610cc09190610ef1565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167f5d8bc849764969eb1bcc6d0a2f55999d0167c1ccec240a4f39cf664ca9c4148e34604051610d0d9190610f34565b60405180910390a2565b600082825260208201905092915050565b7f43616d706169676e20656e646564000000000000000000000000000000000000600082015250565b6000610d5e600e83610d17565b9150610d6982610d28565b602082019050919050565b60006020820190508181036000830152610d8d81610d51565b9050919050565b7f54686520646f6e6174696f6e2076616c7565206d75737420626520677265617460008201527f6572207468616e207a65726f0000000000000000000000000000000000000000602082015250565b6000610df0602c83610d17565b9150610dfb82610d94565b604082019050919050565b60006020820190508181036000830152610e1f81610de3565b9050919050565b7f446f6e6174696f6e20657863656564732074686520616d6f756e74207265717560008201527f6573746564000000000000000000000000000000000000000000000000000000602082015250565b6000610e82602583610d17565b9150610e8d82610e26565b604082019050919050565b60006020820190508181036000830152610eb181610e75565b9050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610efc82610eb8565b9150610f0783610eb8565b9250828201905080821115610f1f57610f1e610ec2565b5b92915050565b610f2e81610eb8565b82525050565b6000602082019050610f496000830184610f25565b92915050565b60008115159050919050565b610f6481610f4f565b82525050565b6000602082019050610f7f6000830184610f5b565b92915050565b600081519050919050565b60005b83811015610fae578082015181840152602081019050610f93565b60008484015250505050565b6000601f19601f8301169050919050565b6000610fd682610f85565b610fe08185610d17565b9350610ff0818560208601610f90565b610ff981610fba565b840191505092915050565b6000602082019050818103600083015261101e8184610fcb565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061105182611026565b9050919050565b61106181611046565b82525050565b600060208201905061107c6000830184611058565b92915050565b600080fd5b61109081610eb8565b811461109b57600080fd5b50565b6000813590506110ad81611087565b92915050565b6000602082840312156110c9576110c8611082565b5b60006110d78482850161109e565b91505092915050565b6110e981611046565b81146110f457600080fd5b50565b600081359050611106816110e0565b92915050565b60006020828403121561112257611121611082565b5b6000611130848285016110f7565b91505092915050565b600060ff82169050919050565b61114f81611139565b811461115a57600080fd5b50565b60008135905061116c81611146565b92915050565b6000806040838503121561118957611188611082565b5b60006111978582860161109e565b92505060206111a88582860161115d565b9150509250929050565b60006040820190506111c76000830185610f25565b6111d46020830184610f25565b9392505050565b60006111e682610eb8565b91506111f183610eb8565b925082820390508181111561120957611208610ec2565b5b92915050565b7f5468652063616d706169676e206973207374696c6c206f70656e000000000000600082015250565b6000611245601a83610d17565b91506112508261120f565b602082019050919050565b6000602082019050818103600083015261127481611238565b9050919050565b7f5468652063616d706169676e207265616368656420746865207265717569726560008201527f6420616d6f756e74000000000000000000000000000000000000000000000000602082015250565b60006112d7602883610d17565b91506112e28261127b565b604082019050919050565b60006020820190508181036000830152611306816112ca565b9050919050565b7f4e6f20646f6e6174696f6e7320746f2077697468647261770000000000000000600082015250565b6000611343601883610d17565b915061134e8261130d565b602082019050919050565b6000602082019050818103600083015261137281611336565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806113c057607f821691505b6020821081036113d3576113d2611379565b5b50919050565b7f596f7520617265206e6f74207468652072656365697665720000000000000000600082015250565b600061140f601883610d17565b915061141a826113d9565b602082019050919050565b6000602082019050818103600083015261143e81611402565b9050919050565b7f5468652063616d706169676e20646964206e6f7420726561636820746865207260008201527f6571756972656420616d6f756e74000000000000000000000000000000000000602082015250565b60006114a1602e83610d17565b91506114ac82611445565b604082019050919050565b600060208201905081810360008301526114d081611494565b9050919050565b7f43616d706169676e20697320616c726561647920636c6f736564207965740000600082015250565b600061150d601e83610d17565b9150611518826114d7565b602082019050919050565b6000602082019050818103600083015261153c81611500565b9050919050565b7f5468652063616d706169676e2063616e206e6f7420626520636c6f7365640000600082015250565b6000611579601e83610d17565b915061158482611543565b602082019050919050565b600060208201905081810360008301526115a88161156c565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006115e982610eb8565b91506115f483610eb8565b925082611604576116036115af565b5b82820490509291505056fea2646970667358221220806da23bdf3ec4b143a88b1b7dd9e6f3977af72e1b0127dabf01591e4f7b34dd64736f6c63430008130033a2646970667358221220d3e546817b0fae3d3749076cbfcaa18486bd6675a8078cc86a1408c3f77ceae164736f6c63430008130033";

type DonationPlatformContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DonationPlatformContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DonationPlatformContract__factory extends ContractFactory {
  constructor(...args: DonationPlatformContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      DonationPlatformContract & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): DonationPlatformContract__factory {
    return super.connect(runner) as DonationPlatformContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DonationPlatformContractInterface {
    return new Interface(_abi) as DonationPlatformContractInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): DonationPlatformContract {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as DonationPlatformContract;
  }
}
