import inbox from "../icons/inbox.png";
import star from "../icons/star.png";
import postponed from "../icons/postponed.png";
import send from "../icons/send.png";
import insert from "../icons/insert.png";
import important from '../icons/important.png'
import hangout from '../icons/hangout.png'
import schedule from '../icons/schedule.png'
import mail from '../icons/mail.png'
import report from '../icons/report.png'
import categories from '../icons/categories.png'
import del from '../icons/del.png'
import settings from '../icons/settings.png'
import add from '../icons/add.png'
export const menuData = [
  {
    id: 1,
    name: "Gelen Kutusu",
    icon: inbox,
    className: "menu active",
    
  },
  {
    id: 2,
    name: "Yıldızlı",
    icon: star,
    className: "menu",
  },
  {
    id: 3,
    name: "Ertelenenler",
    icon: postponed,
    className: "menu",
  },
  {
    id: 4,
    name: "Gönderilmiş Postalar",
    icon: send,
    className: "menu",
  },
  {
    id: 5,
    name: "Taslaklar",
    icon: insert,
    className: "menu",
  },
  
];

export const expandMenu = [
  {
    id: 1,
    name: "Önemli",
    icon : important, 
    className: "menu",
  },
  {
    id: 2,
    name: "Sohbetler",
    icon : hangout, 
    className: "menu",
  },
  {
    id: 3,
    name: "Zamanlanmış",
    icon : schedule, 
    className: "menu",
  },
  {
    id: 4,
    name: "Tüm postalar",
    icon : mail, 
    className: "menu",
  },
  {
    id: 5,
    name: "Spam",
    icon : report, 
    className: "menu",
  },
  {
    id: 6,
    name: "Çöp Kutusu",
    icon : del, 
    className: "menu",
  },
  {
    id: 7,
    name: "Kategoriler",
    icon : categories, 
    className: "menu",
  },
  {
    id: 8,
    name: "Etiketleri Yönet",
    icon : settings, 
    className: "menu",
  },
  {
    id: 9,
    name: "Yeni Etiket Oluştur",
    icon : add, 
    className: "menu",
  },
];
