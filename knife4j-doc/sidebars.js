const donateHtml = `
<div class="sidebar_donate">
    <div class="sidebar_sponsor">
        <a target="_blank" href="https://www.apifox.com/apiskills/apifox-auto-generates-api-docs/?utm_source=pay&utm_medium=knife4jg"><img src="/images/sponsor/apifox/Apifox IDEA@3x.png"/>
        </a>
    </div>
    <div class="sidebar_sponsor_submit">
        <a href="/docs/community/donate">成为赞助商</a>
    </div>
<div>
`

module.exports = {
    docs: [{
        type: 'html',
        value: donateHtml,
        defaultStyle: true
    },
        'quick-start/quick-start',
        'community/joinus',
        'community/contributing',
    {
        type: 'category',
        label: '序章',
        collapsed: true,
        link: {
            type: 'doc',
            id: 'introduction/introduction-index',
        },
        items: [
            'introduction/introduction-index',
            'introduction/introduction-background',
            'introduction/support',
            'introduction/ui',
            'introduction/gvp',
            'introduction/milestone'
        ],
    }, {
        type: 'category',
        label: '社区',
        collapsed: true,
        link: {
            type: 'doc',
            id: 'community/community',
        },
        items: [
            'community/community-get-helps',
            'community/sourcecode',
            'community/apache',
            'community/changelog',

            'community/donate',

            'community/simple-demo',
        ],
    }, {
        type: 'category',
        label: '增强特性',
        collapsed: true,
        link: {
            type: 'doc',
            id: 'features/features',
        },
        items: [
            'features/enhance',
            'features/i18n',
            'features/author',
            'features/selfdocument',
            'features/accessControl',
            'features/apiSort',
            'features/tagSort',
            'features/requestCache',
            'features/dynamicRequestParameter',
            'features/exportDocument',
            'features/filterRequestParameter',
            'features/includeRequestParameter',
            'features/search',
            'features/clearCache',
            'features/dynamicRequestDescription',
            'features/dynamicResponseDescription',
            'features/host',
            'features/afterScript',
            'features/oauth2',
            'features/postman',
            'features/globalParameter',
            'features/swaggermodels',
            'features/customHome',
            'features/customFooter',
            'features/jsr303',
            'features/forbidDebug',
            'features/forbidSearch',
            'features/forbidOpenApi',
            'features/gitVersion'
        ],
    },
    {
        type: 'category',
        label: '版本升级',
        link: {
            type: 'generated-index',
            title: '升级',
            slug: '/upgrading',
            keywords: ['upgrading'],
        },
        items: [
            {
                type: 'autogenerated',
                dirName: 'upgrading',
            },
        ],
    }],
    oas: [{
        type: 'html',
        value: donateHtml,
        defaultStyle: true
    },
        'oas/oas-intro',
    {
        type: 'category',
        label: 'OpenAPI规范',
        collapsed: true,
        link: {
            type: 'doc',
            id: 'oas/openapi-spe',
        },
        items: [
            'oas/openapi-spe',
            'oas/openapi2',
            'oas/openapi3'
        ],
    },
    {
        type: 'category',
        label: 'Java注解',
        collapsed: true,
        link: {
            type: 'doc',
            id: 'oas/annotation-introduction',
        },
        items: [
            'oas/openapi2-annotation',
            'oas/openapi3-annotation'
        ],
    }
    ],
    "middleware-sources": [
        {
            type: 'html',
            value: donateHtml,
            defaultStyle: true
        },
        "middleware-sources/middle-index",
        "middleware-sources/spring-cloud-gateway/spring-gateway-introduction",
        "middleware-sources/spring-webflux/spring-webflux-introduction",
        {
            type: 'category',
            label: 'Aggregation微服务聚合中间件',
            collapsed: true,
            link: {
                type: 'doc',
                id: 'middleware-sources/aggregation-introduction',
            },
            items: [
                'middleware-sources/aggregation-introduction',
                'middleware-sources/aggregation-disk',
                'middleware-sources/aggregation-cloud',
                'middleware-sources/aggregation-eureka',
                'middleware-sources/aggregation-nacos'
            ],
        },
        {
            type: 'category',
            label: 'Insight独立渲染组件',
            collapsed: true,
            link: {
                type: 'doc',
                id: 'middleware-sources/desktop-introduction',
            },
            items: [
                'middleware-sources/desktop-introduction',
                'middleware-sources/desktop-install',
                {
                    type: 'category',
                    label: '数据源-服务中心',
                    collapsed: true,
                    link: {
                        type: 'doc',
                        id: 'middleware-sources/desktop/service-introduction',
                    }, items: []
                },
                {
                    type: 'category',
                    label: '数据源-配置中心',
                    collapsed: true,
                    link: {
                        type: 'doc',
                        id: 'middleware-sources/desktop/config-introduction',
                    }, items: [
                        'middleware-sources/desktop/config-disk',
                        'middleware-sources/desktop/config-nacos',
                    ]
                }
            ],
        }
    ],
    "changelog": [{
        type: 'html',
        value: donateHtml,
        defaultStyle: true
    },
    {
        type: 'category',
        label: '4.x版本',
        link: {
            type: 'doc',
            id: "changelog/changelog-index"
        },
        items: [
            {
                type: 'autogenerated',
                dirName: 'changelog/4.x',
            },
        ]
    },
    {
        type: 'category',
        label: '2.x版本',
        collapsed: true,
        items: [

            "changelog/x/2021-06-28-knife4j-2.0.9-issue",
            "changelog/x/2020-11-22-knife4j-2.0.8-issue",
            "changelog/x/2020-11-02-knife4j-2.0.7-issue",
            "changelog/x/2020-10-26-knife4j-2.0.6-issue",
            "changelog/x/2020-09-14-knife4j-2.0.5-issue",
            "changelog/x/2020-06-28-knife4j-2.0.4-issue",
            "changelog/x/2020-05-24-knife4j-2.0.3-issue",
            "changelog/x/2020-03-08-knife4j-2.0.2-issue",
            "changelog/x/2019-12-23-knife4j-2.0.1-issue",
            "changelog/x/2019-12-16-knife4j-2.0.0-issue"
        ]
    },
    {
        type: 'category',
        label: '1.x版本',

        items: [
            "changelog/x/2019-08-28-swagger-bootstrap-ui-1.9.6-issue", "changelog/x/2019-07-31-swagger-bootstrap-ui-1.9.5-issue", "changelog/x/2019-06-10-swagger-bootstrap-ui-1.9.4-issue", "changelog/x/2019-05-20-knife4j-admin-1.0-issue", "changelog/x/2019-04-23-swagger-bootstrap-ui-1.9.3-issue", "changelog/x/2019-04-08-swagger-bootstrap-ui-1.9.2-issue", "changelog/x/2019-03-11-swagger-bootstrap-ui-1.9.1-issue", "changelog/x/2019-02-25-swagger-bootstrap-ui-1.9.0-issue", "changelog/x/2019-01-11-swagger-bootstrap-ui-1.8.9-issue", "changelog/x/2018-12-17-swagger-bootstrap-ui-1.8.8-issue", "changelog/x/2018-11-12-swagger-bootstrap-ui-1.8.7-issue", "changelog/x/2018-10-31-swagger-bootstrap-ui-1.8.6-issue", "changelog/x/2018-10-16-swagger-bootstrap-ui-1.8.5-issue", "changelog/x/2018-09-25-swagger-bootstrap-ui-1.8.4-issue", "changelog/x/2018-09-17-swagger-bootstrap-ui-1.8.3-issue", "changelog/x/2018-08-26-swagger-bootstrap-ui-1.8.2-issue", "changelog/x/2018-08-14-swagger-bootstrap-ui-1.8.1-issue", "changelog/x/2018-08-10-swagger-bootstrap-ui-1.8.0-issue", "changelog/x/2018-08-06-swagger-bootstrap-ui-1.7.9-issue", "changelog/x/2018-08-03-swagger-bootstrap-ui-1.7.8-issue", "changelog/x/2018-07-25-swagger-bootstrap-ui-1.7.7-issue", "changelog/x/2018-07-18-swagger-bootstrap-ui-1.7.6-issue", "changelog/x/2018-07-16-swagger-bootstrap-ui-1.7.5-issue", "changelog/x/2018-04-28-swagger-bootstrap-ui-1.7.3-issue", "changelog/x/2018-01-20-swagger-bootstrap-ui-1.7.2-issue", "changelog/x/2017-12-18-swagger-bootstrap-ui-1.7-issue", "changelog/x/2017-09-06-swagger-bootstrap-ui-1.6-issue", "changelog/x/2017-09-01-swagger-bootstrap-ui-1.5-issue", "changelog/x/2017-07-11-swagger-bootstrap-ui-1.4-issue", "changelog/x/2017-07-05-swagger-bootstrap-ui-1.3-issue", "changelog/x/2017-05-14-swagger-bootstrap-ui-1.2-issue", "changelog/x/2017-04-27-swagger-bootstrap-ui-1.1-issue", "changelog/x/2017-04-19-swagger-bootstrap-ui-open"
        ]
    }
    ],
    "faq": [{
        type: 'html',
        value: donateHtml,
        defaultStyle: true
    },
    {
        type: 'category',
        label: 'FAQ',
        link: {
            type: 'doc',
            id: "faq/faq-index"
        },
        items: [
            {
                type: 'autogenerated',
                dirName: 'faq',
            },
        ]
    }
    ],
    "action": [
        {
            type: 'html',
            value: donateHtml,
            defaultStyle: true
        },
        "action/action-index",
        "action/action-simple"
        , {
            type: 'category',
            label: 'Spring 单体架构',
            collapsed: true,
            items: [
                'action/mavenbom',
                'action/springmvc',
                'action/springboot'
            ]
        }
        , {
            type: 'category',
            label: 'Spring微服务架构',
            collapsed: true,
            items: [
                'action/springcloud-gateway',
                'action/springcloud-zuul'
            ]
        }

        , {
            type: 'category',
            label: 'OAuth2.0',
            collapsed: true,
            items: [
                'action/oauth2-implicit',
                'action/oauth2-authorization_code',
                'action/oauth2-client_credentials',
                'action/oauth2-password'
            ]
        }
        , {
            type: 'category',
            label: '微服务聚合实战',
            collapsed: true,
            items: [
                'action/aggregation-disk',
                'action/aggregation-cloud',
                'action/aggregation-eureka',
                'action/aggregation-nacos',
                'action/aggregation-docker'
            ]
        }
        , {
            type: 'category',
            label: 'ASP.NET Core',
            collapsed: true,
            items: [
                'action/dotnetcore-knife4j-how',
                'action/dotnetcore-knife4j-guid'
            ]
        }, {
            type: 'category',
            label: 'Springfox 源码系列',
            collapsed: true,
            link: {
                type: 'doc',
                id: 'action/springfox/springfox-index',
            },
            items: [
                'action/springfox/springfox1',
                'action/springfox/springfox2',
                'action/springfox/springfox3',
                'action/springfox/springfox4',
                'action/springfox/springfox5',
                'action/springfox/springfox6',
                'action/springfox/springfox7',
                'action/springfox/springfox8',
                'action/springfox/springfox9',
                'action/springfox/springfox10',
                'action/springfox/springfox11',
                'action/springfox/springfox12',
                'action/springfox/springfox13',
                'action/springfox/springfox14',
                'action/springfox/springfox15',
                'action/springfox/springfox16',
                'action/springfox/springfox17',
                'action/springfox/springfox18',
                'action/springfox/springfox19',
                'action/springfox/springfox20',
                'action/springfox/springfox21'
            ]
        }, {
            type: 'category',
            label: '其他',
            collapsed: true,
            items: [
                'action/others/doc-search'
            ]
        }
    ]
}