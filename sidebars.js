/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

  introduction: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['intro', 'v3-overview'],
    },
  ],
  smartcontracts: [
    {
      type: 'category',
      label: 'Smart Contracts',
      items: ['smart-contracts/zora-v3',
      {
        type: 'category',
        label: 'Create NFT Collection',
        collapsed: true,
        items: [
          'smart-contracts/creator-tools/intro',
          'smart-contracts/creator-tools/ZoraNFTCreator',
          'smart-contracts/creator-tools/ERC721Drop', 
          'smart-contracts/creator-tools/EditionMetadataRenderer', 
          'smart-contracts/creator-tools/DropMetadataRenderer'
        ],
      },
      {
        type: 'category',
        label: 'V3 Modules ',
        collapsed: false,
        items: [
          {
            type: 'category',
            label: 'Asks',
            collapsed: true,
            items: [
              'smart-contracts/modules/Asks/zora-v3-asks-intro',
              {
                type: 'category',
                label: 'Core',
                collapsed: true,
                items: ['smart-contracts/modules/Asks/Core/zora-v3-asks-coreETH'],
              },
              'smart-contracts/modules/Asks/private_asks',
              'smart-contracts/modules/Asks/zora-v3-asks-v1.1',
              'smart-contracts/modules/Asks/zora-v3-asks-v1.0',
          ],
          },
          {
            type: 'category',
            label: 'Reserve Auction',
            collapsed: true,
            items: [
              'smart-contracts/modules/ReserveAuctions/zora-v3-reserve-auctions-intro',
              {
                type: 'category',
                label: 'Core',
                collapsed: true,
                items: [
                  'smart-contracts/modules/ReserveAuctions/Core/zora-v3-auctions-coreETH',
                  'smart-contracts/modules/ReserveAuctions/Core/zora-v3-auctions-coreERC20',
                ],
              },
              {
                type: 'category',
                label: 'Finders',
                collapsed: true,
                items: [
                  'smart-contracts/modules/ReserveAuctions/Finders/zora-v3-auctions-finderETH',
                  'smart-contracts/modules/ReserveAuctions/Finders/zora-v3-auctions-finderERC20'
                ],
              },
              // {
              //   type: 'category',
              //   label: 'Listing',
              //   collapsed: true,
              //   items: [
              //     'smart-contracts/modules/ReserveAuctions/Listing/zora-v3-auctions-ListingETH',
              //     'smart-contracts/modules/ReserveAuctions/Listing/zora-v3-auctions-ListingERC20'
              //   ],
              // },
            ],
          },
          {
            type: 'category',
            label: 'Offers',
            collapsed: true,
            items: ['smart-contracts/modules/Offers/zora-v3-offers-latest'],
          },
        ],
      },
      {
        type: 'category',
        label: 'Guides',
        collapsed: false,
        items: ['guides/v3-approvals', 'guides/sell-nft-fixed-price'],
      }],
    },
  ],
  api: [
    {
      type: 'category',
      label: 'Zora API',
      items: [
        'zora-api/intro',
        'zora-api/query-formatting', 
        'zora-api/media-encoding',
        'zora-api/zdk',
        {
          type: 'category',
          label: 'Guides',
          collapsed: false,
          items: [
            'guides/api-address-balance',
            'guides/api-collection-data',
            'guides/zdk-intro-guide'
          ],
        },
      ],
    },
  ],
  devtools: [
    {
      type: 'category',
      label: 'Dev Tools',
      collapsed: true,
      items: [
        'zora-api/zdk',
        {
          type: 'category',
          label: 'NFT Rendering',
          collapsed: true,
          items: ['developer-tools/nft-rendering/introduction'],
        },
      {
        type: 'category',
        label: 'NFT Hooks',
        collapsed: false,
        items: [
          'developer-tools/nft-hooks/intro', 
          'developer-tools/nft-hooks/useNft', 
          'developer-tools/nft-hooks/usenftmetadata', 
          'developer-tools/nft-hooks/usenftcontent'
        ],
      },
      
    ],
    },
  ],
}
