﻿// Copyright (c) 2022 YA-androidapp(https://github.com/YA-androidapp) All rights reserved.

const banners = [
    {
        item_image: '104.png',
        item_title: 'ExternalMonitoring-UptimeRobot-PowerAutomate',
        item_label: 'ExternalMonitoring',
        item_summary: '簡易的な Web 監視を Power Automate で実現する',
        item_tags: ['tutorial', 'powerautomate'],
    },
    {
        item_image: '003.png',
        item_title: 'PowerApps-SakeLedger',
        item_label: 'SakeLedger',
        item_summary: 'PowerAppsでCRUDアプリを実装する手順',
        item_tags: ['tutorial', 'powerapps'],
    }
];

const repos = [
    {
        item_image: '2353701_s.jpg',
        item_title: 'PowerPlatform-PowerApps-AppFramework',
        item_label: 'AppFramework',
        item_summary: 'Power Appsキャンバスアプリのフレームワーク',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'list.png',
        item_title: 'PowerPlatform-PowerApps-BookManagement',
        item_label: 'BookManagement',
        item_summary: 'Power Apps で実装した蔵書管理アプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'RoomScreen.png',
        item_title: 'PowerPlatform-PowerApps-ConferenceRoomManagement',
        item_label: 'ConferenceRoomManagement',
        item_summary: 'Power Apps で実装した会議室予約システム',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-Stamp',
        item_label: 'Stamp',
        item_summary: 'Power Apps で実装したデジタルスタンプラリーアプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-ReceptionCounter',
        item_label: 'ReceptionCounter',
        item_summary: 'Power Apps で実装した市役所の受付窓口順番待ちアプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-FeedReader',
        item_label: 'FeedReader',
        item_summary: 'Power Apps で実装したRSSリーダー',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'Canvasapp.png',
        item_title: 'PowerPlatform-CustomConnector-CSharp-Cryptography',
        item_label: 'Cryptography',
        item_summary: 'C#カスタムコネクタで暗号化・復号化するキャンバスアプリ',
        item_tags: ['solution', 'powerapps', 'customconnector'],
    },
    {
        item_image: 'Connector.png',
        item_title: 'PowerPlatform-CustomConnector-CSharp-XML',
        item_label: 'XML',
        item_summary: 'C#カスタムコネクタでXML文字列からJSONに変換する',
        item_tags: ['solution', 'powerapps', 'customconnector'],
    },
    {
        item_image: 'registerapp.png',
        item_title: 'PowerPlatform-PowerApps-Circulation',
        item_label: 'Circulation',
        item_summary: 'Power Apps で実装した回覧・承認アプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'MapView.png',
        item_title: 'PowerPlatform-PowerApps-MapView',
        item_label: 'MapView',
        item_summary: '館内案内図・フリーアドレス座席予約などに使える、地図上に人やモノの位置を動的に描画するキャンバスアプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'app.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-CustomConnector-GetPresence',
        item_label: 'Presence',
        item_summary: 'テナント内のユーザーのプレゼンスを取得する',
        item_tags: ['solution', 'powerapps', 'customconnector'],
    },
    {
        item_image: 'card.png',
        item_title: 'PowerPlatform-PowerApps-MapApp',
        item_label: 'MapApp',
        item_summary: 'Bing Maps を Power Apps キャンバスアプリに表示する',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-Geocoding-Gsi',
        item_label: 'Geocoding',
        item_summary: '地理院地図を利用したジオコーディング',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App.png',
        item_title: 'PowerPlatform-PowerApps-Clocks',
        item_label: 'Clocks',
        item_summary: '<a href="https://github.com/YA-androidapp/PowerPlatform-PowerApps-AppFramework">AppFramework</a>からアナログ時計コンポーネントのみ切り出し、デジタル時計を追加',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'MainScreen.png',
        item_title: 'PowerPlatform-PowerApps-Otowa',
        item_label: 'Otowa',
        item_summary: '<a href="https://github.com/YA-androidapp/Otowa">Otowa</a> を Power Apps に移植',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'app.png',
        item_title: 'PowerPlatform-PowerApps-PasswordGen',
        item_label: 'PasswordGen',
        item_summary: 'ランダムパスワードを生成するキャンバスアプリ',
        item_tags: ['powerapps'],
    },
    {
        item_image: 'PosRegister01.png',
        item_title: 'PowerPlatform-PowerApps-POS',
        item_label: 'POS',
        item_summary: 'Power Apps で実装した POS レジ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'DisplayTerminal01.png',
        item_title: 'PowerPlatform-PowerApps-WaitingList',
        item_label: 'WaitingList',
        item_summary: 'Power Apps で実装した順番待ちアプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'Print01.png',
        item_title: 'PowerPlatform-PowerApps-AppointmentSystem',
        item_label: 'AppointmentSystem',
        item_summary: 'Power Apps で実装した診療予約システム',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-SharePoint-HorizontalApp',
        item_label: 'SharePoint-HorizontalApp',
        item_summary: 'スキャフォールディングしたのと同等の横向きキャンバスアプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-Circulation-Management-Exchange-Equipment',
        item_label: 'Equipment',
        item_summary: 'Power Apps で実装した備品管理アプリ（Exchangeリソースメールボックス使用）',
        item_tags: ['solution', 'powerapps', 'powerautomate', 'customconnector'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-MSTeams-Client',
        item_label: 'MSTeams-Client',
        item_summary: 'Power Apps で実装した Teams クライアント',
        item_tags: ['solution', 'powerapps', 'teams'],
    },
    {
        item_image: 'Teams01.png',
        item_title: 'PowerPlatform-PowerAutomate-Teams-SafetyConfirmation',
        item_label: 'SafetyConfirmation',
        item_summary: 'Power Automate でアダプティブカードを送信する安否確認システム',
        item_tags: ['solution', 'powerautomate', 'teams'],
    },
    {
        item_image: 'AP001.png',
        item_title: 'PowerPlatform-PowerAutomate-Approvals-Simple-3steps',
        item_label: 'Approvals',
        item_summary: 'Power Automate で実装した、シンプルな3段階承認ワークフロー',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'Flow01.png',
        item_title: 'PowerPlatform-PowerAutomate-Approvals-Dynamically',
        item_label: 'Approvals',
        item_summary: 'Power Automate で実装した、承認経路を動的に指定できるちょっと複雑な承認ワークフロー',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'Flow01.png',
        item_title: 'PowerPlatform-PowerAutomate-Wait',
        item_label: 'Wait',
        item_summary: 'Sleep / Wait / 指定秒数待機するクラウドフロー',
        item_tags: ['powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-SocialBookmark',
        item_label: 'SocialBookmark',
        item_summary: 'Power Apps で実装したソーシャルブックマークアプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'Flow01.png',
        item_title: 'PowerPlatform-PowerAutomate-SendingMailWeekly',
        item_label: 'Mail',
        item_summary: '毎週メールを送信するクラウドフロー',
        item_tags: ['powerautomate'],
    },
    {
        item_image: '104.png',
        item_title: 'ExternalMonitoring-UptimeRobot-PowerAutomate',
        item_label: 'ExternalMonitoring',
        item_summary: '簡易的な Web 監視を Power Automate で実現する',
        item_tags: ['tutorial', 'powerautomate'],
    },
    {
        item_image: '003.png',
        item_title: 'PowerApps-SakeLedger',
        item_label: 'SakeLedger',
        item_summary: 'PowerAppsでCRUDアプリを実装する手順',
        item_tags: ['tutorial', 'powerapps'],
    },
    {
        item_image: 'story.png',
        item_title: 'PowerPlatform-PowerApps-NovelGameEngine',
        item_label: 'NovelGameEngine',
        item_summary: 'Power Apps ・ Power Automate ・ Power BIを利用してゲームエンジン・ユーザーコラボレーション・分析ポータルを作成する',
        item_tags: ['powerapps', 'powerautomate', 'powerbi'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-MediaPlayer',
        item_label: 'MediaPlayer',
        item_summary: 'Power Apps で実装したメディアプレーヤーアプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-Weather',
        item_label: 'Weather',
        item_summary: 'Power Apps で実装した天気予報アプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-Circulation-Management-Cars',
        item_label: 'Cars',
        item_summary: 'Power Apps で実装した社用車貸出管理アプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-Calendars',
        item_label: 'Calendars',
        item_summary: 'Power Apps で実装したカレンダー集',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'Flow01.png',
        item_title: 'PowerPlatform-PowerAutomate-CopyFlow',
        item_label: 'CopySelf',
        item_summary: 'クラウドフローを複製するクラウドフロー',
        item_tags: ['solution', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-Teams-CallMemo',
        item_label: 'CallMemo',
        item_summary: 'Power Apps で入力し、 Power Automate 経由でアダプティブカードを送信する伝言メモアプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate', 'teams'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-BusinessCard',
        item_label: 'BusinessCard',
        item_summary: 'Power Apps と Power Automate で実装した名刺申請ワークフロー・作成アプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-Teams-RemoteWorkReport',
        item_label: 'RemoteWorkReport',
        item_summary: 'Power Apps と Power Automate で実装したリモートワーク業務日報',
        item_tags: ['solution', 'powerapps', 'powerautomate', 'teams'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-MeetingAgenda',
        item_label: 'MeetingAgenda',
        item_summary: 'Power Apps で実装した会議アジェンダテンプレート',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-FaxCover',
        item_label: 'FaxCover',
        item_summary: 'Power Apps で実装したFAX送付状印刷アプリ',
        item_tags: ['solution', 'powerapps'],
    },

    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-Lipsum',
        item_label: 'Lipsum',
        item_summary: 'Power Apps と Power Automate で実装したLipsum取得アプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-MeetingMinutes',
        item_label: 'Minutes',
        item_summary: 'Power Apps と Power Automate で実装した議事録アプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-Sticky',
        item_label: 'Sticky',
        item_summary: 'Power Apps で実装した付箋式タスク管理アプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-Agriculture',
        item_label: 'Agriculture',
        item_summary: 'Power Apps で実装した圃場管理（スマート農業）アプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PomodoroTimer',
        item_label: 'PomodoroTimer',
        item_summary: 'Power Apps で実装したポモドーロタイマーアプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-EquipmentManagement',
        item_label: 'Equipments',
        item_summary: 'Power Apps で実装した備品管理アプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-SoftwareManagement',
        item_label: 'SoftwareManagement',
        item_summary: 'Power Apps と Power Automate で実装したソフトウェア管理台帳アプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-CustomerManagement',
        item_label: 'Customers',
        item_summary: 'Power Apps で実装した顧客管理アプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-AADUserTable',
        item_label: 'AADUser',
        item_summary: 'AAD Userテーブルのテスト',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-Members',
        item_label: 'Members',
        item_summary: 'Power Apps で実装した社員一覧アプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-HealthManagement',
        item_label: 'HealthManagement',
        item_summary: 'Power Apps で実装した健康管理アプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-ShrineSearch',
        item_label: 'ShrineSearch',
        item_summary: 'Power Apps で実装した神社検索アプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-CSV',
        item_label: 'CSV',
        item_summary: 'Power Apps で CSV データをグリッド表示',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'Forms01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-MountainClimbingRegistration',
        item_label: 'MountainClimbingRegistration',
        item_summary: 'Power Apps と Power Automate 、 Forms で実装した登山届提出システム',
        item_tags: ['solution', 'powerapps', 'powerautomate', 'forms'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-ShapeGeoJSONObjects',
        item_label: 'ShapeGeoJSONObjects',
        item_summary: 'Power Apps で GeoJSON データを表示',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-Faker',
        item_label: 'Faker',
        item_summary: 'Power Apps でテストデータを生成',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-InquiryManagement',
        item_label: 'InquiryManagement',
        item_summary: 'Power Apps と Power Automate で実装した問い合わせ管理システム',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-Paint',
        item_label: 'Paint',
        item_summary: 'Power Apps で手書きペイント',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-VoiceActressDirectory',
        item_label: 'VoiceActressDirectory',
        item_summary: 'Power Apps で実装した声優名鑑',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'Outlook01.png',
        item_title: 'PowerPlatform-PowerAutomate-TrainingForTargetedThreat',
        item_label: 'TrainingForTargetedThreat',
        item_summary: '標的型攻撃に対する訓練を行うクラウドフロー',
        item_tags: ['solution', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-OfficeReceptionSystem',
        item_label: 'OfficeReceptionSystem',
        item_summary: 'Power Apps と Power Automate で実装したオフィス向け来訪者受付アプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate', 'teams'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-BusLocationSystem',
        item_label: 'BusLocationSystem',
        item_summary: 'Power Apps と Power Automate で実装したバスロケシステム',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-ParkingManagement',
        item_label: 'ParkingManagement',
        item_summary: 'Power Apps と Power Automate で実装した駐車場管理システム',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-FoodInventoryManagement',
        item_label: 'FoodInventoryManagement',
        item_summary: 'Power Apps と Power Automate で実装した冷蔵庫の中の食材を管理、賞味期限間近のものを通知するアプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-VideoPlayer',
        item_label: 'VideoPlayer',
        item_summary: 'Power Apps で実装した動画プレーヤーアプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-ExaminationResult-RadarChart',
        item_label: 'ExaminationResult',
        item_summary: 'Power Apps で実装した試験結果通知アプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-PaidLeaveApplication',
        item_label: 'PaidLeaveApplication',
        item_summary: 'Power Apps で実装した有給休暇申請アプリと Power Automate で実装した承認フロー',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-AgeChart',
        item_label: 'AgeChart',
        item_summary: 'Power Apps で実装した年齢早見表アプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-Teams-BranchManagement',
        item_label: 'BranchManagement',
        item_summary: 'Power Apps と Power Automate で実装した支店管理・連絡アプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate', 'teams'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-WBS',
        item_label: 'WBS',
        item_summary: 'Power Apps で実装したWBS',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-TransportationExpenseReport',
        item_label: 'TransportationExpenseReport',
        item_summary: 'Power Apps で実装した交通費精算申請アプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-AttendanceBook',
        item_label: 'AttendanceBook',
        item_summary: 'Power Apps と power Automate で実装した出勤簿',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-CongestionForecast',
        item_label: 'CongestionForecast',
        item_summary: 'Power Apps で実装した混雑予想表アプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-DocumentedEvidenceManagement',
        item_label: 'DocumentedEvidenceManagement',
        item_summary: 'Power Apps と power Automate で実装した証憑管理アプリ（見積書・注文書・注文請書・納品書・検収書・請求書・領収書）',
        item_tags: ['solution', 'powerapps', 'powerautomate', 'teams'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-ClassJournal',
        item_label: 'ClassJournal',
        item_summary: 'Power Apps で実装した学級日誌アプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-TakingOutApproval',
        item_label: 'TakingOutApproval',
        item_summary: 'Power Apps と power Automate で実装したPC持ち出し申請・承認アプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate', 'teams'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-Addresses',
        item_label: 'Addresses',
        item_summary: 'Power Apps で実装した住所検索アプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-PurchaseApproval',
        item_label: 'PurchaseApproval',
        item_summary: 'Power Apps と power Automate で実装した物品購入申請・承認アプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate', 'teams'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-CongratulatoryCondolenceMoneyApplication',
        item_label: 'CongratulatoryCondolenceMoneyApplication',
        item_summary: 'Power Apps と power Automate で実装した慶弔見舞金支給申請アプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'OWA01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-OfficeTemplates',
        item_label: 'OfficeTemplates',
        item_summary: 'Power Apps と power Automate で実装した Office ファイルへのデータ差し込み',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-ProgressManagement',
        item_label: 'ProgressManagement',
        item_summary: 'Power Apps と power Automate で実装した進捗管理アプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-QrParticipationCertificate',
        item_label: 'QrParticipationCertificate',
        item_summary: 'Power Apps で実装した QR コードを表示する参加証アプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-Emoji',
        item_label: 'Emoji',
        item_summary: 'Power Apps で実装した Emoji を一覧表示するアプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-SimpleToDo',
        item_label: 'SimpleToDo',
        item_summary: 'Power Apps と power Automate で実装した ToDo アプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-Calculator',
        item_label: 'Calculator',
        item_summary: 'Power Apps で実装した電卓アプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-HierarchicalSocialBookmark',
        item_label: 'HierarchicalSocialBookmark',
        item_summary: 'Power Apps で実装した階層型ソーシャルブックマークアプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-QrInventoryControl',
        item_label: 'QrInventoryControl',
        item_summary: 'Power Apps で実装したQRコードを読み取って棚卸を行う在庫管理アプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-LostAndFoundItemsManagement',
        item_label: 'LostAndFoundItemsManagement',
        item_summary: 'Power Apps で実装した忘れ物管理アプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-BlogManagement',
        item_label: 'BlogManagement',
        item_summary: 'Power Apps と power Automate で実装したブログ記事管理アプリ・承認フロー',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-BrandManagement',
        item_label: 'BrandManagement',
        item_summary: 'Power Apps で実装したブランド資産管理アプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-ConferenceManagement',
        item_label: 'ConferenceManagement',
        item_summary: 'Power Apps で実装したカンファレンス管理アプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-FavoriteRestaurant',
        item_label: 'FavoriteRestaurant',
        item_summary: 'Power Apps で実装したお気に入りレストラン一覧アプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-RecipeBook',
        item_label: 'RecipeBook',
        item_summary: 'Power Apps で実装したレシピブックアプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-TripPlanner',
        item_label: 'TripPlanner',
        item_summary: 'Power Apps で実装した旅行計画アプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-CallCenter',
        item_label: 'CallCenter',
        item_summary: 'Power Apps で実装したコールセンター通話履歴アプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-BucketList',
        item_label: 'BucketList',
        item_summary: 'Power Apps で実装した死ぬまでにやることリスト',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-CarMaintenance',
        item_label: 'CarMaintenance',
        item_summary: 'Power Apps で実装した自動車整備記録簿アプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-GiftShopping',
        item_label: 'GiftShopping',
        item_summary: 'Power Apps で実装したギフト購入管理アプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-HomeInventory',
        item_label: 'HomeInventory',
        item_summary: 'Power Apps で実装したHome Inventory（自宅向け在庫管理・情報整理）アプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-PostMap',
        item_label: 'PostMap',
        item_summary: 'Power Apps と power Automate で実装した郵便ポスト地図',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-ToiletCleaningChecklist',
        item_label: 'ToiletCleaningChecklist',
        item_summary: 'Power Apps で実装したトイレ掃除チェック表アプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-BusinessReport',
        item_label: 'BusinessReport',
        item_summary: 'Power Apps で実装した作業報告書アプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-EmergencyBagCheckList',
        item_label: 'EmergencyBagCheckList',
        item_summary: 'Power Apps で実装した非常時持出品チェックアプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-InterofficeMail',
        item_label: 'InterofficeMail',
        item_summary: 'Power Apps と power Automate で実装した社内便管理アプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-MichinoekiMap',
        item_label: 'MichinoekiMap',
        item_summary: 'Power Apps で実装した道の駅検索アプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-OfficeAssets',
        item_label: 'OfficeAssets',
        item_summary: 'Power Apps と power Automate で実装した社内資産管理アプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-ContractManagement',
        item_label: 'ContractManagement',
        item_summary: 'Power Apps と power Automate で実装した契約書管理アプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-StaffManagement',
        item_label: 'StaffManagement',
        item_summary: 'Power Apps と power Automate で実装したスタッフ派遣管理アプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-NPOManagement',
        item_label: 'NPOManagement',
        item_summary: 'Power Apps と power Automate で実装したNPO向け管理アプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-PerformanceReview',
        item_label: 'PerformanceReview',
        item_summary: 'Power Apps と power Automate で実装した査定管理アプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-SoftwareRelease',
        item_label: 'SoftwareRelease',
        item_summary: 'Power Apps と power Automate で実装したソフトウェアリリース計画アプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-LibraryInventory',
        item_label: 'LibraryInventory',
        item_summary: 'Power Apps と power Automate で実装した図書館蔵書管理アプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-SoftwareBugTracker',
        item_label: 'SoftwareBugTracker',
        item_summary: 'Power Apps と power Automate で実装したソフトウェアバグ追跡アプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-CommercialRealEstateManagement',
        item_label: 'CommercialRealEstateManagement',
        item_summary: 'Power Apps で実装した商業用物件管理アプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-MedicalInstitutionAndPharmacySearch',
        item_label: 'MedicalInstitutionAndPharmacySearch',
        item_summary: 'Power Apps と power Automate で実装した医療機関・薬局検索アプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-CheckInMeeting',
        item_label: 'CheckInMeeting',
        item_summary: 'Power Apps と power Automate で実装したチェックインミーティングアプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-Nananiji',
        item_label: 'Nananiji',
        item_summary: 'Power Apps で実装したCV閲覧アプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-CrackInspection',
        item_label: 'CrackInspection',
        item_summary: 'Power Apps と power Automate で実装したひび割れ点検アプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-CustomerFeedback',
        item_label: 'CustomerFeedback',
        item_summary: 'Power Apps と power Automate で実装したお客様の声管理アプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-Wordbook',
        item_label: 'Wordbook',
        item_summary: 'Power Apps と power Automate で実装した単語集アプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-HotelRegister',
        item_label: 'HotelRegister',
        item_summary: 'Power Apps で実装した旅館・ホテル用宿泊者名簿アプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-WifiApManagement',
        item_label: 'WifiAP',
        item_summary: 'Power Apps で実装したWiFi親機管理アプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-SurveyReport',
        item_label: 'SurveyReport',
        item_summary: 'Power Apps と Power Automate で実装した調査報告書アプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'Erd01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-DailyReport',
        item_label: 'DailyReport',
        item_summary: 'Power Apps と Power Automate で実装した業務日報・週報・月報アプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-CustomerList',
        item_label: 'CustomerList',
        item_summary: 'Power Apps で実装した顧客リスト',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-MachineMaintenanceLog',
        item_label: 'MachineMaintenanceLog',
        item_summary: 'Power Apps で実装した機械整備簿',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-Covid19FeverTable',
        item_label: 'Covid19FeverTable',
        item_summary: 'Power Apps と Power Automate で実装した新型コロナ対策検温表アプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-StudyReport',
        item_label: 'StudyReport',
        item_summary: 'Power Apps と Power Automate で実装した研修報告アプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-EventProposal',
        item_label: 'EventProposal',
        item_summary: 'Power Apps と Power Automate で実装したイベント企画書アプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-InternalDecisionRequest',
        item_label: 'InternalDecisionRequest',
        item_summary: 'Power Apps と Power Automate で実装した発注向け社内稟議アプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-BusinessModelCanvas',
        item_label: 'BusinessModelCanvas',
        item_summary: 'Power Apps で実装した BMC （ビジネスモデルキャンバス）',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-ReviewRecords',
        item_label: 'ReviewRecords',
        item_summary: 'Power Apps で実装したレビュー記録票',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-SchoolTimetable',
        item_label: 'SchoolTimetable',
        item_summary: 'Power Apps で実装した授業時間割アプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-SkillSheet',
        item_label: 'SkillSheet',
        item_summary: 'Power Apps で実装した職務経歴書アプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-OnlinePetition',
        item_label: 'OnlinePetition',
        item_summary: 'Power Apps と Power Automate で実装したオンライン署名アプリ',
        item_tags: ['solution', 'powerapps', 'powerautomate', 'powerpages'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-QrReader',
        item_label: 'QrReader',
        item_summary: 'Power Apps で実装した QR コードリーダー',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-QrGen',
        item_label: 'QrGen',
        item_summary: 'Power Apps で実装した QR コード生成アプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-BusinessCompletionReport',
        item_label: 'BusinessCompletionReport',
        item_summary: 'Power Apps で実装した作業完了報告書（作業時間報告書）アプリ',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-BarcodeReaderPreview22101',
        item_label: 'BarcodeReaderPreview22101',
        item_summary: 'Power Apps で実装したバーコードリーダーアプリ（Released version 22101）',
        item_tags: ['powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-Pastebin',
        item_label: 'Pastebin',
        item_summary: 'Power Apps で実装した Pastebin',
        item_tags: ['solution', 'powerapps'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-PowerAutomate-Dataverse-View-Filtering-Date',
        item_label: 'DataverseViewFilteringDate',
        item_summary: 'Dataverse ビューでの日時フィルタリング',
        item_tags: ['solution', 'powerapps', 'powerautomate'],
    },
    {
        item_image: 'App01.png',
        item_title: 'PowerPlatform-PowerApps-DateTimeCalendarPicker',
        item_label: 'DateTimeCalendarPicker',
        item_summary: 'Power Apps キャンバスアプリで実装した日時選択UI',
        item_tags: ['solution', 'powerapps'],
    },
];
