import { Component, ViewChild } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import { MatIconModule } from '@angular/material/icon';
import { EChartsOption } from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { CommonModule } from '@angular/common';
import { NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { ColorHelper } from '@swimlane/ngx-charts';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule } from '@angular/forms'


@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports:[NgChartsModule, MatIconModule, NgxEchartsModule, CommonModule, NgxChartsModule, SlickCarouselModule, FormsModule]
})
export class DashboardComponent {

  public barChartData: ChartConfiguration['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        data: [35, 50, 40, 60, 45],
        backgroundColor: '#FF6B6B', // Red bars
        borderColor: '#FF6B6B',
        borderWidth: 1,
        barThickness: 12,
        borderRadius: 8
      },
      {
        data: [20, 30, 25, 35, 30],
        backgroundColor: '#4E5D78', // Dark gray bars
        borderColor: '#4E5D78',
        borderWidth: 1,
        barThickness: 12,
        borderRadius: 8
      }
    ]
  };

  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false // Hides the legend
      },
      tooltip: {
        enabled: false // Disables tooltips
      }
    },
    scales: {
      x: {
        display: false, // Hides x-axis
        grid: {
          drawTicks: false,
          // drawBorder: false,
          drawOnChartArea: false
        }
      },
      y: {
        display: false, // Hides y-axis
        grid: {
          drawTicks: false,
          // drawBorder: false,
          drawOnChartArea: false
        }
      }
    }
  };

  public barChartType: ChartType = 'bar';

  

  public doughnutChartData: ChartConfiguration['data'] = {
    labels: ['Used', 'Remaining'],
    datasets: [
      {
        data: [12, 88], // 12% used, 88% remaining
        backgroundColor: ['#4CAF50', '#4E5D78'], // Green and dark gray
        hoverBackgroundColor: ['#4CAF50', '#4E5D78'],
        borderWidth: 10
      }
    ]
  };

  public doughnutChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: false 
      },
      legend: {
        display: false 
      }
    },
    // cutout: '75%' // Set cutout size for the inner circle
  };

  public doughnutChartType: ChartType = 'doughnut';


  
  activeTab: 'users' | 'projects' = 'users'; // Track selected tab

  // Chart Data
  usersData = {
    xAxis: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    thisYear: [10000, 8000, 12000, 15000, 25000, 18000, 22000],
    lastYear: [5000, 10000, 14000, 10000, 20000, 23000, 27000]
  };

  projectsData = {
    xAxis: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    thisYear: [50, 80, 120, 200, 250, 300, 350],
    lastYear: [30, 60, 100, 180, 230, 290, 310]
  };

  get chartOptions(): EChartsOption {
    const data = this.activeTab === 'users' ? this.usersData : this.projectsData;
    return {
      tooltip: { trigger: 'axis' },
      legend: {
        data: ['This year', 'Last year'],
        right: 20,
        icon: 'circle',
        textStyle: { fontSize: 14, color: '#333' }
      },
      grid: { left: '5%', right: '5%', bottom: '10%', containLabel: true },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: data.xAxis,
        axisLine: { show: false }, //  Hides the x-axis line
        splitLine: { show: false }, // Removes x-axis grid lines
        axisTick: { show: false }, //  Hides small ticks on the x-axis
        axisLabel: { fontSize: 12, color: '#666' }
      },
      yAxis: { type: 'value', axisLine: { show: false }, splitLine: { lineStyle: { color: '#eee' } } },
      series: [
        {
          name: 'This year',
          type: 'line',
          smooth: true,
          data: data.thisYear,
          lineStyle: { color: 'black', width: 2 },
          symbol: 'none',
          itemStyle: {color: 'black'}
        },
        {
          name: 'Last year',
          type: 'line',
          smooth: true,
          data: data.lastYear,
          lineStyle: { type: 'dashed', color: 'lightgray' },
          symbol: 'none',
          itemStyle: {color: 'gray'}
        }
      ]
    };
  }

  switchTab(tab: 'users' | 'projects') {
    this.activeTab = tab;
  }

  //Traffic Data
  trafficData = [
    { name: 'Google', width: '30%' },
    { name: 'YouTube', width: '35%' },
    { name: 'Instagram', width: '40%' },
    { name: 'Pinterest', width: '25%' },
    { name: 'Facebook', width: '22%' },
    { name: 'Twitter', width: '37%' },
  ];


  //Customer Review
  reviews = [
    { name: 'Sally D.', time: '20m ago', comment: 'It is overqualified and easy to use, thank you.', rating: 5 },
    { name: 'Michael K.', time: '1 day ago', comment: 'An improvement is needed asap.', rating: 2 },
    { name: 'Deniz T.', time: '1 day ago', comment: 'Works well!', rating: 5 },
    { name: 'Melissa', time: '3 day ago', comment: 'Great service and useful interfaces.', rating: 5 },
    { name: 'Sally D.', time: '20m ago', comment: 'It is overqualified and easy to use, thank you.', rating: 5 },
    { name: 'Michael K.', time: '1 day ago', comment: 'An improvement is needed asap.', rating: 2 },
    { name: 'Deniz T.', time: '1 day ago', comment: 'Works well!', rating: 5 },
    { name: 'Melissa', time: '3 day ago', comment: 'Great service and useful interfaces.', rating: 5 }
  ];


  //Donut Chart
  view: [number, number] = [250, 250];

  spendings = [
    { name: 'SERVER', value: 20 },
    { name: 'HOSTING', value: 40 },
    { name: 'SERVICES', value: 15 },
    { name: 'OTHERS', value: 15 }
  ];

  // Correct way to define color scheme
  colorScheme = {
    domain: ['#4285F4', '#34A853', '#FB8C00', '#E0E0E0'],
    name: 'custom',
    selectable: true,
    group: ScaleType.Ordinal // Use ScaleType.Ordinal instead of 'Ordinal'
  };

  animations = true;



  //Products
  products: any[] = [
    {
      image: 'assets/user1.png',
      name: 'ByeWind',
      date: 'Jun 24, 2022',
      amount: '$942.00',
      status: 'In Progress',
      statusClass: 'in-progress',
    },
    {
      image: 'assets/user2.png',
      name: 'Natali Craig',
      date: 'Mar 10, 2022',
      amount: '$881.00',
      status: 'Complete',
      statusClass: 'complete',
    },
    {
      image: 'assets/user3.png',
      name: 'Drew Cano',
      date: 'Nov 10, 2022',
      amount: '$409.00',
      status: 'Pending',
      statusClass: 'pending',
    },
    {
      image: 'assets/user4.png',
      name: 'Orlando Diggs',
      date: 'Dec 20, 2022',
      amount: '$953.00',
      status: 'Approved',
      statusClass: 'approved',
    },
    {
      image: 'assets/user5.png',
      name: 'Andi Lane',
      date: 'Jul 25, 2022',
      amount: '$907.00',
      status: 'Rejected',
      statusClass: 'rejected',
    },
    {
      image: 'assets/user1.png',
      name: 'ByeWind',
      date: 'Jun 24, 2022',
      amount: '$942.00',
      status: 'In Progress',
      statusClass: 'in-progress',
    },
    {
      image: 'assets/user2.png',
      name: 'Natali Craig',
      date: 'Mar 10, 2022',
      amount: '$881.00',
      status: 'Complete',
      statusClass: 'complete',
    },
    {
      image: 'assets/user3.png',
      name: 'Drew Cano',
      date: 'Nov 10, 2022',
      amount: '$409.00',
      status: 'Pending',
      statusClass: 'pending',
    },
    {
      image: 'assets/user4.png',
      name: 'Orlando Diggs',
      date: 'Dec 20, 2022',
      amount: '$953.00',
      status: 'Approved',
      statusClass: 'approved',
    },
    {
      image: 'assets/user5.png',
      name: 'Andi Lane',
      date: 'Jul 25, 2022',
      amount: '$907.00',
      status: 'Rejected',
      statusClass: 'rejected',
    },
    {
      image: 'assets/user1.png',
      name: 'ByeWind',
      date: 'Jun 24, 2022',
      amount: '$942.00',
      status: 'In Progress',
      statusClass: 'in-progress',
    },
    {
      image: 'assets/user2.png',
      name: 'Natali Craig',
      date: 'Mar 10, 2022',
      amount: '$881.00',
      status: 'Complete',
      statusClass: 'complete',
    },
    {
      image: 'assets/user3.png',
      name: 'Drew Cano',
      date: 'Nov 10, 2022',
      amount: '$409.00',
      status: 'Pending',
      statusClass: 'pending',
    },
    {
      image: 'assets/user4.png',
      name: 'Orlando Diggs',
      date: 'Dec 20, 2022',
      amount: '$953.00',
      status: 'Approved',
      statusClass: 'approved',
    },
    {
      image: 'assets/user5.png',
      name: 'Andi Lane',
      date: 'Jul 25, 2022',
      amount: '$907.00',
      status: 'Rejected',
      statusClass: 'rejected',
    },
    {
      image: 'assets/user1.png',
      name: 'ByeWind',
      date: 'Jun 24, 2022',
      amount: '$942.00',
      status: 'In Progress',
      statusClass: 'in-progress',
    },
    {
      image: 'assets/user2.png',
      name: 'Natali Craig',
      date: 'Mar 10, 2022',
      amount: '$881.00',
      status: 'Complete',
      statusClass: 'complete',
    },
    {
      image: 'assets/user3.png',
      name: 'Drew Cano',
      date: 'Nov 10, 2022',
      amount: '$409.00',
      status: 'Pending',
      statusClass: 'pending',
    },
    {
      image: 'assets/user4.png',
      name: 'Orlando Diggs',
      date: 'Dec 20, 2022',
      amount: '$953.00',
      status: 'Approved',
      statusClass: 'approved',
    },
    {
      image: 'assets/user5.png',
      name: 'Andi Lane',
      date: 'Jul 25, 2022',
      amount: '$907.00',
      status: 'Rejected',
      statusClass: 'rejected',
    },
    {
      image: 'assets/user1.png',
      name: 'ByeWind',
      date: 'Jun 24, 2022',
      amount: '$942.00',
      status: 'In Progress',
      statusClass: 'in-progress',
    },
    {
      image: 'assets/user2.png',
      name: 'Natali Craig',
      date: 'Mar 10, 2022',
      amount: '$881.00',
      status: 'Complete',
      statusClass: 'complete',
    },
    {
      image: 'assets/user3.png',
      name: 'Drew Cano',
      date: 'Nov 10, 2022',
      amount: '$409.00',
      status: 'Pending',
      statusClass: 'pending',
    },
    {
      image: 'assets/user4.png',
      name: 'Orlando Diggs',
      date: 'Dec 20, 2022',
      amount: '$953.00',
      status: 'Approved',
      statusClass: 'approved',
    },
    {
      image: 'assets/user5.png',
      name: 'Andi Lane',
      date: 'Jul 25, 2022',
      amount: '$907.00',
      status: 'Rejected',
      statusClass: 'rejected',
    },
  ];


  //Best Selling Products
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.slickModal.slickGoTo(0); // Force re-render
    }, 500);
  }
  bestProducts = [
    {
      name: 'Stylish Cricket & Walking Light Weight Shoes',
      oldPrice: 280,
      newPrice: 140,
      rating: 4.5,
      sale: true,
    },
    {
      name: 'Combo Pack of 2 Sports Shoes Running Shoes',
      oldPrice: 320,
      newPrice: 280,
      rating: 4.5,
      sale: false,
    },
    {
      name: 'Combo Pack of 2 Sports Shoes Running Shoes',
      oldPrice: 320,
      newPrice: 280,
      rating: 4.5,
      sale: false,
    },
  ];

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    dots: false,
    arrows: true,
    prevArrow: '<button class="slick-prev">‹</button>',
    nextArrow: '<button class="slick-next">›</button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }


  //Tasks
  tasks = [
    {
      title: 'Draft the new contract document for sales team',
      dueDate: '24 Aug, 2019',
      completed: false,
    },
    {
      title: 'iOS App home page',
      dueDate: '23 Aug, 2019',
      completed: false,
    },
    {
      title: 'Write a release note for Shreyu',
      dueDate: '22 Aug, 2019',
      completed: false,
    },
    {
      title: 'Invite Greeva to a project shreyu admin',
      dueDate: '21 Aug, 2019',
      completed: false,
    },
    {
      title: 'Enable analytics tracking for main website',
      dueDate: '20 Aug, 2019',
      completed: false,
    },
    {
      title: 'Draft the new contract document for sales team',
      dueDate: '24 Aug, 2019',
      completed: false,
    },
    {
      title: 'iOS App home page',
      dueDate: '23 Aug, 2019',
      completed: false,
    },
    {
      title: 'Write a release note for Shreyu',
      dueDate: '22 Aug, 2019',
      completed: false,
    },
    {
      title: 'Invite Greeva to a project shreyu admin',
      dueDate: '21 Aug, 2019',
      completed: false,
    },
    {
      title: 'Enable analytics tracking for main website',
      dueDate: '20 Aug, 2019',
      completed: false,
    },
    {
      title: 'Draft the new contract document for sales team',
      dueDate: '24 Aug, 2019',
      completed: false,
    },
    {
      title: 'iOS App home page',
      dueDate: '23 Aug, 2019',
      completed: false,
    },
    {
      title: 'Write a release note for Shreyu',
      dueDate: '22 Aug, 2019',
      completed: false,
    },
    {
      title: 'Invite Greeva to a project shreyu admin',
      dueDate: '21 Aug, 2019',
      completed: false,
    },
    {
      title: 'Enable analytics tracking for main website',
      dueDate: '20 Aug, 2019',
      completed: false,
    },
    {
      title: 'Draft the new contract document for sales team',
      dueDate: '24 Aug, 2019',
      completed: false,
    },
    {
      title: 'iOS App home page',
      dueDate: '23 Aug, 2019',
      completed: false,
    },
    {
      title: 'Write a release note for Shreyu',
      dueDate: '22 Aug, 2019',
      completed: false,
    },
    {
      title: 'Invite Greeva to a project shreyu admin',
      dueDate: '21 Aug, 2019',
      completed: false,
    },
    {
      title: 'Enable analytics tracking for main website',
      dueDate: '20 Aug, 2019',
      completed: false,
    },
    {
      title: 'Draft the new contract document for sales team',
      dueDate: '24 Aug, 2019',
      completed: false,
    },
    {
      title: 'iOS App home page',
      dueDate: '23 Aug, 2019',
      completed: false,
    },
    {
      title: 'Write a release note for Shreyu',
      dueDate: '22 Aug, 2019',
      completed: false,
    },
    {
      title: 'Invite Greeva to a project shreyu admin',
      dueDate: '21 Aug, 2019',
      completed: false,
    },
    {
      title: 'Enable analytics tracking for main website',
      dueDate: '20 Aug, 2019',
      completed: false,
    },
    {
      title: 'Draft the new contract document for sales team',
      dueDate: '24 Aug, 2019',
      completed: false,
    },
    {
      title: 'iOS App home page',
      dueDate: '23 Aug, 2019',
      completed: false,
    },
    {
      title: 'Write a release note for Shreyu',
      dueDate: '22 Aug, 2019',
      completed: false,
    },
    {
      title: 'Invite Greeva to a project shreyu admin',
      dueDate: '21 Aug, 2019',
      completed: false,
    },
    {
      title: 'Enable analytics tracking for main website',
      dueDate: '20 Aug, 2019',
      completed: false,
    },
  ];

  toggleTask(task: any) {
    task.completed = !task.completed;
  }

  //Conversation
  messages = [
    {
      sender: 'Geneva',
      text: 'Hello!',
      time: '10:00',
      avatar: 'https://cdn-icons-png.flaticon.com/512/8090/8090406.png',
      type: 'received',
    },
    {
      sender: 'You',
      text: 'Hi, How are you? What about our next meeting?',
      time: '10:01',
      avatar: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png',
      type: 'sent',
    },
    {
      sender: 'Geneva',
      text: 'Yeah everything is fine',
      time: '10:01',
      avatar: 'https://cdn-icons-png.flaticon.com/512/8090/8090406.png',
      type: 'received',
    },
    {
      sender: 'You',
      text: "Wow that's great",
      time: '10:02',
      avatar: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png',
      type: 'sent',
    },
    {
      sender: 'Geneva',
      text: 'How Are You',
      time: '10:03',
      avatar: 'https://cdn-icons-png.flaticon.com/512/8090/8090406.png',
      type: 'received',
    },
    {
      sender: 'You',
      text: "Good",
      time: '10:03',
      avatar: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png',
      type: 'sent',
    },
  ];

  newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({
        sender: 'You',
        text: this.newMessage,
        time: new Date().toLocaleTimeString().slice(0, 5),
        avatar: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png',
        type: 'sent',
      });
      this.newMessage = '';
    }
  } 

}
