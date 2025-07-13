const OsQuestions = [
      {
        "question": "What is the primary function of an operating system?",
        "options": {
          "A": "Compiling code",
          "B": "Managing hardware and software resources",
          "C": "Designing websites",
          "D": "Processing user input"
        },
        "answer": "B"
      },
      {
        "question": "Which of the following is a type of operating system scheduling algorithm?",
        "options": {
          "A": "Bubble Sort",
          "B": "Round Robin",
          "C": "Binary Search",
          "D": "Quick Sort"
        },
        "answer": "B"
      },
      {
        "question": "What is a deadlock in an operating system?",
        "options": {
          "A": "A process waiting for a resource that is held by another process",
          "B": "A process that has terminated",
          "C": "A program that runs indefinitely",
          "D": "A system crash due to hardware failure"
        },
        "answer": "A"
      },
      {
        "question": "Which memory management technique uses fixed-size partitions?",
        "options": {
          "A": "Paging",
          "B": "Segmentation",
          "C": "Fixed Partitioning",
          "D": "Dynamic Partitioning"
        },
        "answer": "C"
      },
      {
        "question": "What does the term 'thrashing' refer to in an operating system?",
        "options": {
          "A": "Excessive swapping of pages between memory and disk",
          "B": "High CPU usage",
          "C": "Network overload",
          "D": "Disk fragmentation"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is not a function of the operating system kernel?",
        "options": {
          "A": "Process management",
          "B": "Memory management",
          "C": "Web browsing",
          "D": "Device management"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of the file system in an operating system?",
        "options": {
          "A": "To manage hardware interrupts",
          "B": "To organize and store data on storage devices",
          "C": "To compile source code",
          "D": "To handle network protocols"
        },
        "answer": "B"
      },
      {
        "question": "Which of the following is a real-time operating system?",
        "options": {
          "A": "Windows 10",
          "B": "Ubuntu",
          "C": "RTOS (Real-Time Operating System)",
          "D": "macOS"
        },
        "answer": "C"
      },
      {
        "question": "What is the role of the scheduler in an operating system?",
        "options": {
          "A": "To manage file storage",
          "B": "To allocate CPU time to processes",
          "C": "To handle network traffic",
          "D": "To compile programs"
        },
        "answer": "B"
      },
      {
        "question": "What is virtual memory in an operating system?",
        "options": {
          "A": "A technique to simulate additional RAM using disk space",
          "B": "A type of CPU cache",
          "C": "A backup storage system",
          "D": "A network memory protocol"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a multi-user operating system?",
        "options": {
          "A": "MS-DOS",
          "B": "Linux",
          "C": "Windows XP",
          "D": "Palm OS"
        },
        "answer": "B"
      },
      {
        "question": "What is the purpose of an interrupt in an operating system?",
        "options": {
          "A": "To stop the CPU permanently",
          "B": "To signal the CPU to handle an event",
          "C": "To allocate memory",
          "D": "To format the disk"
        },
        "answer": "B"
      },
      {
        "question": "Which command is used to display the processes running in a Linux system?",
        "options": {
          "A": "ls",
          "B": "ps",
          "C": "dir",
          "D": "top"
        },
        "answer": "B"
      },
      {
        "question": "What is the function of the swap space in an operating system?",
        "options": {
          "A": "To store temporary files",
          "B": "To act as virtual memory when RAM is full",
          "C": "To manage network connections",
          "D": "To store system logs"
        },
        "answer": "B"
      },
      {
        "question": "Which of the following is an example of a distributed operating system?",
        "options": {
          "A": "Windows 11",
          "B": "Amoeba",
          "C": "MS-DOS",
          "D": "macOS"
        },
        "answer": "B"
      },
      {
        "question": "What is the purpose of a semaphore in an operating system?",
        "options": {
          "A": "To manage file permissions",
          "B": "To synchronize processes",
          "C": "To allocate CPU time",
          "D": "To handle network traffic"
        },
        "answer": "B"
      },
      {
        "question": "Which of the following is a feature of a time-sharing operating system?",
        "options": {
          "A": "Single-user access",
          "B": "Multiple users sharing CPU time",
          "C": "No process scheduling",
          "D": "Dedicated hardware resources"
        },
        "answer": "B"
      },
      {
        "question": "What is the role of the boot loader in an operating system?",
        "options": {
          "A": "To manage memory allocation",
          "B": "To load the operating system into memory",
          "C": "To handle file compression",
          "D": "To manage network connections"
        },
        "answer": "B"
      },
      {
        "question": "Which of the following is not a type of operating system?",
        "options": {
          "A": "Batch",
          "B": "Time-sharing",
          "C": "Distributed",
          "D": "Sequential"
        },
        "answer": "D"
      },
      {
        "question": "What is the purpose of a device driver in an operating system?",
        "options": {
          "A": "To compile programs",
          "B": "To act as an interface between hardware and software",
          "C": "To manage user accounts",
          "D": "To handle network protocols"
        },
        "answer": "B"
      },
      {
        "question": "Which scheduling algorithm prioritizes processes based on their priority levels?",
        "options": {
          "A": "First-Come, First-Serve",
          "B": "Shortest Job Next",
          "C": "Priority Scheduling",
          "D": "Round Robin"
        },
        "answer": "C"
      },
      {
        "question": "What is the purpose of the page table in memory management?",
        "options": {
          "A": "To map virtual addresses to physical addresses",
          "B": "To store user data",
          "C": "To manage file permissions",
          "D": "To handle interrupts"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a benefit of multitasking in an operating system?",
        "options": {
          "A": "Increased hardware usage",
          "B": "Improved system efficiency and user productivity",
          "C": "Reduced memory usage",
          "D": "Simplified process management"
        },
        "answer": "B"
      },
      {
        "question": "What is the purpose of the fork() system call in Unix-like systems?",
        "options": {
          "A": "To terminate a process",
          "B": "To create a new process",
          "C": "To allocate memory",
          "D": "To manage file permissions"
        },
        "answer": "B"
      },
      {
        "question": "Which of the following is a characteristic of a monolithic kernel?",
        "options": {
          "A": "Modular design",
          "B": "Single large program containing all OS services",
          "C": "Microkernel architecture",
          "D": "Separate user and kernel space"
        },
        "answer": "B"
      },
      {
        "question": "What is the purpose of the shell in an operating system?",
        "options": {
          "A": "To manage hardware resources",
          "B": "To provide a user interface for interacting with the OS",
          "C": "To compile programs",
          "D": "To handle network traffic"
        },
        "answer": "B"
      },
      {
        "question": "Which of the following is a file allocation method in an operating system?",
        "options": {
          "A": "Linked Allocation",
          "B": "Priority Allocation",
          "C": "Round Robin Allocation",
          "D": "Sequential Allocation"
        },
        "answer": "A"
      },
      {
        "question": "What is the purpose of the system call interface in an operating system?",
        "options": {
          "A": "To provide a way for user programs to request OS services",
          "B": "To manage network connections",
          "C": "To compile source code",
          "D": "To handle file compression"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is an example of a batch operating system?",
        "options": {
          "A": "Windows 10",
          "B": "IBM OS/360",
          "C": "Linux",
          "D": "macOS"
        },
        "answer": "B"
      },
      {
        "question": "What is the purpose of the process control block (PCB) in an operating system?",
        "options": {
          "A": "To store user data",
          "B": "To maintain information about a process",
          "C": "To manage file permissions",
          "D": "To handle network traffic"
        },
        "answer": "B"
      },
      {
        "question": "Which of the following is a feature of a microkernel operating system?",
        "options": {
          "A": "All services run in kernel space",
          "B": "Minimal kernel with services in user space",
          "C": "Single large program",
          "D": "No inter-process communication"
        },
        "answer": "B"
      },
      {
        "question": "What is the purpose of the memory management unit (MMU) in an operating system?",
        "options": {
          "A": "To handle file storage",
          "B": "To translate virtual addresses to physical addresses",
          "C": "To manage network connections",
          "D": "To compile programs"
        },
        "answer": "B"
      },
      {
        "question": "Which of the following is a type of inter-process communication?",
        "options": {
          "A": "Pipe",
          "B": "Thread",
          "C": "Cache",
          "D": "Stack"
        },
        "answer": "A"
      },
      {
        "question": "What is the purpose of the file allocation table (FAT) in an operating system?",
        "options": {
          "A": "To manage process scheduling",
          "B": "To track the location of files on a disk",
          "C": "To handle network traffic",
          "D": "To compile programs"
        },
        "answer": "B"
      },
      {
        "question": "Which of the following is a common operating system security feature?",
        "options": {
          "A": "File compression",
          "B": "User authentication",
          "C": "Process scheduling",
          "D": "Memory allocation"
        },
        "answer": "B"
      },
      {
        "question": "What is the purpose of the command-line interface (CLI) in an operating system?",
        "options": {
          "A": "To manage hardware resources",
          "B": "To allow users to interact with the OS using text commands",
          "C": "To compile programs",
          "D": "To handle network traffic"
        },
        "answer": "B"
      },
      {
        "question": "Which of the following is a type of process state in an operating system?",
        "options": {
          "A": "Running",
          "B": "Compiling",
          "C": "Formatting",
          "D": "Networking"
        },
        "answer": "A"
      },
      {
        "question": "What is the purpose of the disk scheduler in an operating system?",
        "options": {
          "A": "To manage CPU allocation",
          "B": "To optimize disk access requests",
          "C": "To handle network traffic",
          "D": "To compile programs"
        },
        "answer": "B"
      },
      {
        "question": "Which of the following is a type of operating system architecture?",
        "options": {
          "A": "Monolithic",
          "B": "Sequential",
          "C": "Parallel",
          "D": "Recursive"
        },
        "answer": "A"
      },
      {
        "question": "What is the purpose of the context switch in an operating system?",
        "options": {
          "A": "To switch between user accounts",
          "B": "To switch between running processes",
          "C": "To manage file permissions",
          "D": "To handle network traffic"
        },
        "answer": "B"
      },
      {
        "question": "Which of the following is a type of file system used in operating systems?",
        "options": {
          "A": "NTFS",
          "B": "HTTP",
          "C": "FTP",
          "D": "TCP"
        },
        "answer": "A"
      },
      {
        "question": "What is the purpose of the operating system's memory allocation?",
        "options": {
          "A": "To manage network connections",
          "B": "To assign memory to processes",
          "C": "To compile programs",
          "D": "To handle file compression"
        },
        "answer": "B"
      },
      {
        "question": "Which of the following is a common disk scheduling algorithm?",
        "options": {
          "A": "FCFS (First-Come, First-Serve)",
          "B": "Bubble Sort",
          "C": "Binary Search",
          "D": "Quick Sort"
        },
        "answer": "A"
      },
      {
        "question": "What is the purpose of the operating system's process synchronization?",
        "options": {
          "A": "To manage file storage",
          "B": "To coordinate access to shared resources",
          "C": "To handle network traffic",
          "D": "To compile programs"
        },
        "answer": "B"
      },
      {
        "question": "Which of the following is a type of operating system user interface?",
        "options": {
          "A": "Graphical User Interface (GUI)",
          "B": "Network Interface",
          "C": "Memory Interface",
          "D": "Process Interface"
        },
        "answer": "A"
      },
      {
        "question": "What is the purpose of the operating system's virtual file system?",
        "options": {
          "A": "To provide a unified interface for different file systems",
          "B": "To manage CPU allocation",
          "C": "To handle network traffic",
          "D": "To compile programs"
        },
        "answer": "A"
      },
      {
        "question": "Which of the following is a type of operating system process?",
        "options": {
          "A": "Foreground Process",
          "B": "Network Process",
          "C": "Memory Process",
          "D": "Storage Process"
        },
        "answer": "A"
      },
      {
        "question": "What is the purpose of the operating system's page replacement algorithm?",
        "options": {
          "A": "To manage file permissions",
          "B": "To decide which pages to swap out of memory",
          "C": "To handle network traffic",
          "D": "To compile programs"
        },
        "answer": "B"
      },
      {
        "question": "Which of the following is a type of operating system kernel?",
        "options": {
          "A": "Hybrid Kernel",
          "B": "Sequential Kernel",
          "C": "Parallel Kernel",
          "D": "Recursive Kernel"
        },
        "answer": "A"
      },
      {
        "question": "What is the purpose of the operating system's thread management?",
        "options": {
          "A": "To manage network connections",
          "B": "To handle lightweight processes within a program",
          "C": "To compile programs",
          "D": "To manage file storage"
        },
        "answer": "B"
      },
      {
        "question": "Which of the following is a type of operating system security mechanism?",
        "options": {
          "A": "Access Control List (ACL)",
          "B": "File Compression",
          "C": "Process Scheduling",
          "D": "Memory Allocation"
        },
        "answer": "A"
      },
      {
        "question": "What is the purpose of the operating system's interrupt handler?",
        "options": {
          "A": "To manage file permissions",
          "B": "To process hardware and software interrupts",
          "C": "To handle network traffic",
          "D": "To compile programs"
        },
        "answer": "B"
      },
      {
        "question": "Which of the following is a type of operating system memory allocation?",
        "options": {
          "A": "Contiguous Allocation",
          "B": "Sequential Allocation",
          "C": "Parallel Allocation",
          "D": "Recursive Allocation"
        },
        "answer": "A"
      },
      {
        "question": "What is the purpose of the operating system's file permissions?",
        "options": {
          "A": "To manage CPU allocation",
          "B": "To control access to files and directories",
          "C": "To handle network traffic",
          "D": "To compile programs"
        },
        "answer": "B"
      },
      {
        "question": "Which of the following is a type of operating system scheduling?",
        "options": {
          "A": "Shortest Job Next",
          "B": "Bubble Sort",
          "C": "Binary Search",
          "D": "Quick Sort"
        },
        "answer": "A"
      },
      {
        "question": "What is the purpose of the operating system's process priority?",
        "options": {
          "A": "To manage file storage",
          "B": "To determine the order of process execution",
          "C": "To handle network traffic",
          "D": "To compile programs"
        },
        "answer": "B"
      },
      {
        "question": "Which of the following is a type of operating system file system?",
        "options": {
          "A": "EXT4",
          "B": "HTTP",
          "C": "FTP",
          "D": "TCP"
        },
        "answer": "A"
      },
      {
        "question": "What is the purpose of the operating system's memory protection?",
        "options": {
          "A": "To prevent unauthorized access to memory",
          "B": "To manage file permissions",
          "C": "To handle network traffic",
          "D": "To compile programs"
        },
        "answer": "A"
      }
    ]

export default OsQuestions;