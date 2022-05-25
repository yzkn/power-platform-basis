﻿// Copyright (c) 2022 YA-androidapp(https://github.com/YA-androidapp) All rights reserved.

const banners = [
    {
        item_image: 'ExternalMonitoring-UptimeRobot-PowerAutomate/104.png',
        item_title: 'ExternalMonitoring-UptimeRobot-PowerAutomate',
        item_label: 'ExternalMonitoring',
        item_summary: '簡易的な Web 監視を Power Automate で実現する',
        item_repo: 'https://github.com/YA-androidapp/ExternalMonitoring-UptimeRobot-PowerAutomate',
        item_tags: ['tutorial', 'powerautomate'],
    },
    {
        item_image: 'PowerApps-SakeLedger/003.png',
        item_title: 'PowerApps-SakeLedger',
        item_label: 'SakeLedger',
        item_summary: 'PowerAppsでCRUDアプリを実装する手順',
        item_repo: 'https://github.com/YA-androidapp/PowerApps-SakeLedger" role="button',
        item_tags: ['tutorial', 'powerapps'],
    }
];

const repos = [
    {
        item_image: 'PowerPlatform-PowerApps-AppFramework/2353701_s.jpg',
        item_title: 'PowerPlatform-PowerApps-AppFramework',
        item_label: 'AppFramework',
        item_summary: 'Power Appsキャンバスアプリのフレームワーク',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-AppFramework',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-BookManagement/list.png',
        item_title: 'PowerPlatform-PowerApps-BookManagement',
        item_label: 'BookManagement',
        item_summary: 'Power Apps で実装した蔵書管理アプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-BookManagement',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-ConferenceRoomManagement/RoomScreen.png',
        item_title: 'PowerPlatform-PowerApps-ConferenceRoomManagement',
        item_label: 'ConferenceRoomManagement',
        item_summary: 'Power Apps で実装した会議室予約システム',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-ConferenceRoomManagement',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-Stamp/App01.png',
        item_title: 'PowerPlatform-PowerApps-Stamp',
        item_label: 'Stamp',
        item_summary: 'Power Apps で実装したデジタルスタンプラリーアプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-Stamp',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-ReceptionCounter/App01.png',
        item_title: 'PowerPlatform-PowerApps-ReceptionCounter',
        item_label: 'ReceptionCounter',
        item_summary: 'Power Apps で実装した市役所の受付窓口順番待ちアプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-ReceptionCounter',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-FeedReader/App01.png',
        item_title: 'PowerPlatform-PowerApps-FeedReader',
        item_label: 'FeedReader',
        item_summary: 'Power Apps で実装したRSSリーダー',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-FeedReader',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'PowerPlatform-CustomConnector-CSharp-Cryptography/Canvasapp.png',
        item_title: 'PowerPlatform-CustomConnector-CSharp-Cryptography',
        item_label: 'Cryptography',
        item_summary: 'C#カスタムコネクタで暗号化・復号化するキャンバスアプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-CustomConnector-CSharp-Cryptography',
        item_tags: ['solution', 'powerapps', 'customconnector'],
    },
    {
        item_image: 'PowerPlatform-CustomConnector-CSharp-XML/Connector.png',
        item_title: 'PowerPlatform-CustomConnector-CSharp-XML',
        item_label: 'XML',
        item_summary: 'C#カスタムコネクタでXML文字列からJSONに変換する',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-CustomConnector-CSharp-XML',
        item_tags: ['solution', 'powerapps', 'customconnector'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-Circulation/registerapp.png',
        item_title: 'PowerPlatform-PowerApps-Circulation',
        item_label: 'Circulation',
        item_summary: 'Power Apps で実装した回覧・承認アプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-Circulation',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-MapView/MapView.png',
        item_title: 'PowerPlatform-PowerApps-MapView',
        item_label: 'MapView',
        item_summary: '館内案内図・フリーアドレス座席予約などに使える、地図上に人やモノの位置を動的に描画するキャンバスアプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-MapView',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-PowerAutomate-CustomConnector-GetPresence/app.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-CustomConnector-GetPresence',
        item_label: 'Presence',
        item_summary: 'テナント内のユーザーのプレゼンスを取得する',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-PowerAutomate-CustomConnector-GetPresence',
        item_tags: ['solution', 'powerapps', 'customconnector'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-MapApp/card.png',
        item_title: 'PowerPlatform-PowerApps-MapApp',
        item_label: 'MapApp',
        item_summary: 'Bing Maps を Power Apps キャンバスアプリに表示する',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-MapApp',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-PowerAutomate-Geocoding-Gsi/App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-Geocoding-Gsi',
        item_label: 'Geocoding',
        item_summary: '地理院地図を利用したジオコーディング',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-PowerAutomate-Geocoding-Gsi',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-Clocks/App.png',
        item_title: 'PowerPlatform-PowerApps-Clocks',
        item_label: 'Clocks',
        item_summary: '<a href="https://github.com/YA-androidapp/PowerPlatform-PowerApps-AppFramework">AppFramework</a>からアナログ時計コンポーネントのみ切り出し、デジタル時計を追加',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-Clocks',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-Otowa/MainScreen.png',
        item_title: 'PowerPlatform-PowerApps-Otowa',
        item_label: 'Otowa',
        item_summary: '<a href="https://github.com/YA-androidapp/Otowa">Otowa</a> を Power Apps に移植',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-Otowa',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-PasswordGen/app.png',
        item_title: 'PowerPlatform-PowerApps-PasswordGen',
        item_label: 'PasswordGen',
        item_summary: 'ランダムパスワードを生成するキャンバスアプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-PasswordGen',
        item_tags: ['powerapps'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-POS/PosRegister01.png',
        item_title: 'PowerPlatform-PowerApps-POS',
        item_label: 'POS',
        item_summary: 'Power Apps で実装した POS レジ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-POS',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-WaitingList/DisplayTerminal01.png',
        item_title: 'PowerPlatform-PowerApps-WaitingList',
        item_label: 'WaitingList',
        item_summary: 'Power Apps で実装した順番待ちアプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-WaitingList',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-AppointmentSystem/Print01.png',
        item_title: 'PowerPlatform-PowerApps-AppointmentSystem',
        item_label: 'AppointmentSystem',
        item_summary: 'Power Apps で実装した診療予約システム',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-AppointmentSystem',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-SharePoint-HorizontalApp/App01.png',
        item_title: 'PowerPlatform-PowerApps-SharePoint-HorizontalApp',
        item_label: 'SharePoint-HorizontalApp',
        item_summary: 'スキャフォールディングしたのと同等の横向きキャンバスアプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-SharePoint-HorizontalApp',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-PowerAutomate-Circulation-Management-Exchange-Equipment/App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-Circulation-Management-Exchange-Equipment',
        item_label: 'Equipment',
        item_summary: 'Power Apps で実装した備品管理アプリ（Exchangeリソースメールボックス使用）',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-PowerAutomate-Circulation-Management-Exchange-Equipment',
        item_tags: ['solution', 'powerapps', 'powerautomate', 'customconnector'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-MSTeams-Client/App01.png',
        item_title: 'PowerPlatform-PowerApps-MSTeams-Client',
        item_label: 'MSTeams-Client',
        item_summary: 'Power Apps で実装した Teams クライアント',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-MSTeams-Client',
        item_tags: ['solution', 'powerapps', 'teams'],
    },
    {
        item_image: 'PowerPlatform-PowerAutomate-Teams-SafetyConfirmation/Teams01.png',
        item_title: 'PowerPlatform-PowerAutomate-Teams-SafetyConfirmation',
        item_label: 'SafetyConfirmation',
        item_summary: 'Power Automate でアダプティブカードを送信する安否確認システム',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerAutomate-Teams-SafetyConfirmation',
        item_tags: ['solution', 'powerautomate', 'teams'],
    },
    {
        item_image: 'PowerPlatform-PowerAutomate-Approvals-Simple-3steps/AP001.png',
        item_title: 'PowerPlatform-PowerAutomate-Approvals-Simple-3steps',
        item_label: 'Approvals',
        item_summary: 'Power Automate で実装した、シンプルな3段階承認ワークフロー',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerAutomate-Approvals-Simple-3steps',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'PowerPlatform-PowerAutomate-Approvals-Dynamically/Flow01.png',
        item_title: 'PowerPlatform-PowerAutomate-Approvals-Dynamically',
        item_label: 'Approvals',
        item_summary: 'Power Automate で実装した、承認経路を動的に指定できるちょっと複雑な承認ワークフロー',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerAutomate-Approvals-Dynamically',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'PowerPlatform-PowerAutomate-Wait/Flow01.png',
        item_title: 'PowerPlatform-PowerAutomate-Wait',
        item_label: 'Wait',
        item_summary: 'Sleep / Wait / 指定秒数待機するクラウドフロー',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerAutomate-Wait',
        item_tags: ['powerautomate'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-SocialBookmark/App01.png',
        item_title: 'PowerPlatform-PowerApps-SocialBookmark',
        item_label: 'SocialBookmark',
        item_summary: 'Power Apps で実装したソーシャルブックマークアプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-SocialBookmark',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'PowerPlatform-PowerAutomate-SendingMailWeekly/Flow01.png',
        item_title: 'PowerPlatform-PowerAutomate-SendingMailWeekly',
        item_label: 'Mail',
        item_summary: '毎週メールを送信するクラウドフロー',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerAutomate-SendingMailWeekly',
        item_tags: ['powerautomate'],
    },
    {
        item_image: 'ExternalMonitoring-UptimeRobot-PowerAutomate/104.png',
        item_title: 'ExternalMonitoring-UptimeRobot-PowerAutomate',
        item_label: 'ExternalMonitoring',
        item_summary: '簡易的な Web 監視を Power Automate で実現する',
        item_repo: 'https://github.com/YA-androidapp/ExternalMonitoring-UptimeRobot-PowerAutomate',
        item_tags: ['tutorial', 'powerautomate'],
    },
    {
        item_image: 'PowerApps-SakeLedger/003.png',
        item_title: 'PowerApps-SakeLedger',
        item_label: 'SakeLedger',
        item_summary: 'PowerAppsでCRUDアプリを実装する手順',
        item_repo: 'https://github.com/YA-androidapp/PowerApps-SakeLedger" role="button',
        item_tags: ['tutorial', 'powerapps'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-NovelGameEngine/story.png',
        item_title: 'PowerPlatform-PowerApps-NovelGameEngine',
        item_label: 'NovelGameEngine',
        item_summary: 'Power Apps ・ Power Automate ・ Power BIを利用してゲームエンジン・ユーザーコラボレーション・分析ポータルを作成する',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-NovelGameEngine',
        item_tags: ['powerapps', 'powerautomate', 'powerbi'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-MediaPlayer/App01.png',
        item_title: 'PowerPlatform-PowerApps-MediaPlayer',
        item_label: 'MediaPlayer',
        item_summary: 'Power Apps で実装したメディアプレーヤーアプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-MediaPlayer',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-Weather/App01.png',
        item_title: 'PowerPlatform-PowerApps-Weather',
        item_label: 'Weather',
        item_summary: 'Power Apps で実装した天気予報アプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-Weather',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-Circulation-Management-Cars/App01.png',
        item_title: 'PowerPlatform-PowerApps-Circulation-Management-Cars',
        item_label: 'Cars',
        item_summary: 'Power Apps で実装した社用車貸出管理アプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-Circulation-Management-Cars',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-Calendars/App01.png',
        item_title: 'PowerPlatform-PowerApps-Calendars',
        item_label: 'Calendars',
        item_summary: 'Power Apps で実装したカレンダー集',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-Calendars',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'PowerPlatform-PowerAutomate-CopyFlow/Flow01.png',
        item_title: 'PowerPlatform-PowerAutomate-CopyFlow',
        item_label: 'CopySelf',
        item_summary: 'クラウドフローを複製するクラウドフロー',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerAutomate-CopyFlow',
        item_tags: ['solution', 'powerautomate'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-PowerAutomate-Teams-CallMemo/App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-Teams-CallMemo',
        item_label: 'CallMemo',
        item_summary: 'Power Apps で入力し、 Power Automate 経由でアダプティブカードを送信する伝言メモアプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-PowerAutomate-Teams-CallMemo',
        item_tags: ['solution', 'powerapps', 'powerautomate', 'teams'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-PowerAutomate-BusinessCard/App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-BusinessCard',
        item_label: 'BusinessCard',
        item_summary: 'Power Apps と Power Automate で実装した名刺申請ワークフロー・作成アプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-PowerAutomate-BusinessCard',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-PowerAutomate-Teams-RemoteWorkReport/App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-Teams-RemoteWorkReport',
        item_label: 'RemoteWorkReport',
        item_summary: 'Power Apps と Power Automate で実装したリモートワーク業務日報',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-PowerAutomate-Teams-RemoteWorkReport',
        item_tags: ['solution', 'powerapps', 'powerautomate', 'teams'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-MeetingAgenda/App01.png',
        item_title: 'PowerPlatform-PowerApps-MeetingAgenda',
        item_label: 'MeetingAgenda',
        item_summary: 'Power Apps で実装した会議アジェンダテンプレート',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-MeetingAgenda',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-FaxCover/App01.png',
        item_title: 'PowerPlatform-PowerApps-FaxCover',
        item_label: 'FaxCover',
        item_summary: 'Power Apps で実装したFAX送付状印刷アプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-FaxCover',
        item_tags: ['solution', 'powerapps'],
    },

    {
        item_image: 'PowerPlatform-PowerApps-PowerAutomate-Lipsum/App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-Lipsum',
        item_label: 'Lipsum',
        item_summary: 'Power Apps と Power Automate で実装したLipsum取得アプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-PowerAutomate-Lipsum',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-PowerAutomate-MeetingMinutes/App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-MeetingMinutes',
        item_label: 'Minutes',
        item_summary: 'Power Apps と Power Automate で実装した議事録アプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-PowerAutomate-MeetingMinutes',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-Sticky/App01.png',
        item_title: 'PowerPlatform-PowerApps-Sticky',
        item_label: 'Sticky',
        item_summary: 'Power Apps で実装した付箋式タスク管理アプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-Sticky',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-Agriculture/App01.png',
        item_title: 'PowerPlatform-PowerApps-Agriculture',
        item_label: 'Agriculture',
        item_summary: 'Power Apps で実装した圃場管理（スマート農業）アプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-Agriculture',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-PomodoroTimer/App01.png',
        item_title: 'PowerPlatform-PowerApps-PomodoroTimer',
        item_label: 'PomodoroTimer',
        item_summary: 'Power Apps で実装したポモドーロタイマーアプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-PomodoroTimer',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-EquipmentManagement/App01.png',
        item_title: 'PowerPlatform-PowerApps-EquipmentManagement',
        item_label: 'Equipments',
        item_summary: 'Power Apps で実装した備品管理アプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-EquipmentManagement',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-PowerAutomate-SoftwareManagement/App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-SoftwareManagement',
        item_label: 'SoftwareManagement',
        item_summary: 'Power Apps と Power Automate で実装したソフトウェア管理台帳アプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-PowerAutomate-SoftwareManagement',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-PowerAutomate-CustomerManagement/App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-CustomerManagement',
        item_label: 'Customers',
        item_summary: 'Power Apps で実装した顧客管理アプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-PowerAutomate-CustomerManagement',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-AADUserTable/App01.png',
        item_title: 'PowerPlatform-PowerApps-AADUserTable',
        item_label: 'AADUser',
        item_summary: 'AAD Userテーブルのテスト',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-AADUserTable',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-Members/App01.png',
        item_title: 'PowerPlatform-PowerApps-Members',
        item_label: 'Members',
        item_summary: 'Power Apps で実装した社員一覧アプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-Members',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-HealthManagement/App01.png',
        item_title: 'PowerPlatform-PowerApps-HealthManagement',
        item_label: 'HealthManagement',
        item_summary: 'Power Apps で実装した健康管理アプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-HealthManagement',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-ShrineSearch/App01.png',
        item_title: 'PowerPlatform-PowerApps-ShrineSearch',
        item_label: 'ShrineSearch',
        item_summary: 'Power Apps で実装した神社検索アプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-ShrineSearch',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-CSV/App01.png',
        item_title: 'PowerPlatform-PowerApps-CSV',
        item_label: 'CSV',
        item_summary: 'Power Apps で CSV データをグリッド表示',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-CSV',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-PowerAutomate-MountainClimbingRegistration/Forms01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-MountainClimbingRegistration',
        item_label: 'MountainClimbingRegistration',
        item_summary: 'Power Apps と Power Automate 、 Forms で実装した登山届提出システム',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-PowerAutomate-MountainClimbingRegistration',
        item_tags: ['solution', 'powerapps', 'powerautomate', 'forms'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-ShapeGeoJSONObjects/App01.png',
        item_title: 'PowerPlatform-PowerApps-ShapeGeoJSONObjects',
        item_label: 'ShapeGeoJSONObjects',
        item_summary: 'Power Apps で GeoJSON データを表示',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-ShapeGeoJSONObjects',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-Faker/App01.png',
        item_title: 'PowerPlatform-PowerApps-Faker',
        item_label: 'Faker',
        item_summary: 'Power Apps でテストデータを生成',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-Faker',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-PowerAutomate-InquiryManagement/App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-InquiryManagement',
        item_label: 'InquiryManagement',
        item_summary: 'Power Apps と Power Automate で実装した問い合わせ管理システム',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-PowerAutomate-InquiryManagement',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-Paint/App01.png',
        item_title: 'PowerPlatform-PowerApps-Paint',
        item_label: 'Paint',
        item_summary: 'Power Apps で手書きペイント',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-Paint',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-VoiceActressDirectory/App01.png',
        item_title: 'PowerPlatform-PowerApps-VoiceActressDirectory',
        item_label: 'VoiceActressDirectory',
        item_summary: 'Power Apps で実装した声優名鑑',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-VoiceActressDirectory',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'PowerPlatform-PowerAutomate-TrainingForTargetedThreat/Outlook01.png',
        item_title: 'PowerPlatform-PowerAutomate-TrainingForTargetedThreat',
        item_label: 'TrainingForTargetedThreat',
        item_summary: '標的型攻撃に対する訓練を行うクラウドフロー',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerAutomate-TrainingForTargetedThreat',
        item_tags: ['solution', 'powerautomate'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-PowerAutomate-OfficeReceptionSystem/App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-OfficeReceptionSystem',
        item_label: 'OfficeReceptionSystem',
        item_summary: 'Power Apps と Power Automate で実装したオフィス向け来訪者受付アプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-PowerAutomate-OfficeReceptionSystem',
        item_tags: ['solution', 'powerapps', 'powerautomate', 'teams'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-PowerAutomate-BusLocationSystem/App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-BusLocationSystem',
        item_label: 'BusLocationSystem',
        item_summary: 'Power Apps と Power Automate で実装したバスロケシステム',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-PowerAutomate-BusLocationSystem',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-PowerAutomate-ParkingManagement/App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-ParkingManagement',
        item_label: 'ParkingManagement',
        item_summary: 'Power Apps と Power Automate で実装した駐車場管理システム',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-PowerAutomate-ParkingManagement',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-PowerAutomate-FoodInventoryManagement/App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-FoodInventoryManagement',
        item_label: 'FoodInventoryManagement',
        item_summary: 'Power Apps と Power Automate で実装した冷蔵庫の中の食材を管理、賞味期限間近のものを通知するアプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-PowerAutomate-FoodInventoryManagement',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-VideoPlayer/App01.png',
        item_title: 'PowerPlatform-PowerApps-VideoPlayer',
        item_label: 'VideoPlayer',
        item_summary: 'Power Apps で実装した動画プレーヤーアプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-VideoPlayer',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-ExaminationResult-RadarChart/App01.png',
        item_title: 'PowerPlatform-PowerApps-ExaminationResult-RadarChart',
        item_label: 'ExaminationResult',
        item_summary: 'Power Apps で実装した試験結果通知アプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-ExaminationResult-RadarChart',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-PowerAutomate-PaidLeaveApplication/App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-PaidLeaveApplication',
        item_label: 'PaidLeaveApplication',
        item_summary: 'Power Apps で実装した有給休暇申請アプリと Power Automate で実装した承認フロー',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-PowerAutomate-PaidLeaveApplication',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-AgeChart/App01.png',
        item_title: 'PowerPlatform-PowerApps-AgeChart',
        item_label: 'AgeChart',
        item_summary: 'Power Apps で実装した年齢早見表アプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-AgeChart',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-PowerAutomate-Teams-BranchManagement/App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-Teams-BranchManagement',
        item_label: 'BranchManagement',
        item_summary: 'Power Apps と Power Automate で実装した支店管理・連絡アプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-PowerAutomate-Teams-BranchManagement',
        item_tags: ['solution', 'powerapps', 'powerautomate', 'teams'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-WBS/App01.png',
        item_title: 'PowerPlatform-PowerApps-WBS',
        item_label: 'WBS',
        item_summary: 'Power Apps で実装したWBS',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-WBS',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-TransportationExpenseReport/App01.png',
        item_title: 'PowerPlatform-PowerApps-TransportationExpenseReport',
        item_label: 'TransportationExpenseReport',
        item_summary: 'Power Apps で実装した交通費精算申請アプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-TransportationExpenseReport',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-PowerAutomate-AttendanceBook/App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-AttendanceBook',
        item_label: 'AttendanceBook',
        item_summary: 'Power Apps と power Automate で実装した出勤簿',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-PowerAutomate-AttendanceBook',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-CongestionForecast/App01.png',
        item_title: 'PowerPlatform-PowerApps-CongestionForecast',
        item_label: 'CongestionForecast',
        item_summary: 'Power Apps で実装した混雑予想表アプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-CongestionForecast',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-PowerAutomate-DocumentedEvidenceManagement/App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-DocumentedEvidenceManagement',
        item_label: 'DocumentedEvidenceManagement',
        item_summary: 'Power Apps と power Automate で実装した証憑管理アプリ（見積書・注文書・注文請書・納品書・検収書・請求書・領収書）',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-PowerAutomate-DocumentedEvidenceManagement',
        item_tags: ['solution', 'powerapps', 'powerautomate', 'teams'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-ClassJournal/App01.png',
        item_title: 'PowerPlatform-PowerApps-ClassJournal',
        item_label: 'ClassJournal',
        item_summary: 'Power Apps で実装した学級日誌アプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-ClassJournal',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-PowerAutomate-TakingOutApproval/App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-TakingOutApproval',
        item_label: 'TakingOutApproval',
        item_summary: 'Power Apps と power Automate で実装したPC持ち出し申請・承認アプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-PowerAutomate-TakingOutApproval',
        item_tags: ['solution', 'powerapps', 'powerautomate', 'teams'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-Addresses/App01.png',
        item_title: 'PowerPlatform-PowerApps-Addresses',
        item_label: 'Addresses',
        item_summary: 'Power Apps で実装した住所検索アプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-Addresses',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-PowerAutomate-PurchaseApproval/App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-PurchaseApproval',
        item_label: 'PurchaseApproval',
        item_summary: 'Power Apps と power Automate で実装した物品購入申請・承認アプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-PowerAutomate-PurchaseApproval',
        item_tags: ['solution', 'powerapps', 'powerautomate', 'teams'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-PowerAutomate-CongratulatoryCondolenceMoneyApplication/App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-CongratulatoryCondolenceMoneyApplication',
        item_label: 'CongratulatoryCondolenceMoneyApplication',
        item_summary: 'Power Apps と power Automate で実装した慶弔見舞金支給申請アプリ',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-PowerAutomate-CongratulatoryCondolenceMoneyApplication',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'PowerPlatform-PowerApps-PowerAutomate-OfficeTemplates/OWA01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-OfficeTemplates',
        item_label: 'OfficeTemplates',
        item_summary: 'Power Apps と power Automate で実装した Office ファイルへのデータ差し込み',
        item_repo: 'https://github.com/YA-androidapp/PowerPlatform-PowerApps-PowerAutomate-OfficeTemplates',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
];
