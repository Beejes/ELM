// Courses.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Courses.css'; // Import the CSS file
import Quiz from './Quiz';

const Courses = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showAssessment, setShowAssessment] = useState(false);
  const [isQuizFullscreen, setIsQuizFullscreen] = useState(false); // For quiz fullscreen
    const [examQuestions, setExamQuestions] = useState({
        // ... your exam questions (same as before)
        
          
              "Decibel relation for power gain is:": {
                  "options": [
                      " N_dB = 20 log_10 (V_2^2 / V_1^2) + 20 log_10 (Z_1 / Z_2) ",
                      " N_dB = 10 log_10 (V_2^2 / V_1^2) + 10 log_10 (Z_2 / Z_1) ",
                      " N_dB = 20 log_10 (V_2 / V_1) + 10 log_10 (Z_2 / Z_1) ",
                      " N_dB = 10 log_10 (V_2 / V_1) + 10 log_10 (Z_2 / Z_1) "
                  ],
                  "correctAnswer": " N_dB = 20 log_10 (V_2 / V_1) + 10 log_10 (Z_2 / Z_1) "
              },
          
              "Maximum power that can be transferred from source to load is:": {
                  "options": [
                      "  25%",
                      "  75%",
                      "  50%",
                      "  100%"
                  ],
                  "correctAnswer": "  50%"
              },
          
          
              "Power factor (R/Z) has a maximum value of:": {
                  "options": [
                      "  0.0",
                      "  0.5",
                      "  1.0",
                      "  1.5"
                  ],
                  "correctAnswer": "  1.0"
              },
          
          
              "EEPROM has a drain and floating gate gap of:": {
                  "options": [
                      "  5 nm",
                      "  10 nm",
                      "  12 nm",
                      "  15 nm"
                  ],
                  "correctAnswer": "  10 nm"
              },
          
          
              "Heisenberg's principle of uncertainty says:": {
                  "options": [
                      "  Signal of 10Hz can be generated.",
                      "  Signal of 10MHz can be generated.",
                      "  Signal of 100MHz can be generated.",
                      "  Signal of band 100MHz-105MHz can be generated."
                  ],
                  "correctAnswer": "  Signal of band 100MHz-105MHz can be generated."
              },
          
          
              "UHF frequency signal can be amplified using:": {
                  "options": [
                      "  Class A amplifier",
                      "  Class AB amplifier",
                      "  Class C amplifier",
                      "  Class B amplifier"
                  ],
                  "correctAnswer": "  Class C amplifier"
              },
          
          
              "Two's complement of 00011011 is:": {
                  "options": [
                      "  11100100",
                      "  11100101",
                      "  11000101",
                      "  11110001"
                  ],
                  "correctAnswer": "  11100101"
              },
          
          
              "Elementary building block of a combinational circuit is:": {
                  "options": [
                      "  Logic gate",
                      "  Flip-flop",
                      "  Both logic gate and flip-flop",
                      "  Memory"
                  ],
                  "correctAnswer": "  Logic gate"
              },
          
          
              "Synchronous circuit that changes its state at a specific clock signal is:": {
                  "options": [
                      "  Event-driven",
                      "  Clock-driven",
                      "  Pulse-driven",
                      "  Frequency-driven"
                  ],
                  "correctAnswer": "  Clock-driven"
              },
          
          
              "Bandwidth of a microprocessor represents:": {
                  "options": [
                      "  Clock speed",
                      "  Width of internal bus",
                      "  Number of bits processed/instruction",
                      "  Number of bits processed/sec"
                  ],
                  "correctAnswer": "  Width of internal bus"
              },
          
          
              "PPI 8255 has an internal bus of size:": {
                  "options": [
                      "  4 bit",
                      "  8 bit",
                      "  16 bit",
                      "  32 bit"
                  ],
                  "correctAnswer": "  8 bit"
              },
          
          
              "Interrupt Service Routine (ISR) executes:": {
                  "options": [
                      "  Before execution of current instructions",
                      "  With pause of current instructions",
                      "  After execution of current instructions",
                      "  With execution of no instruction"
                  ],
                  "correctAnswer": "  With pause of current instructions"
              },
          
          
              "Which of the following is not a data type in C?": {
                  "options": [
                      "  int",
                      "  float",
                      "  String",
                      "  char"
                  ],
                  "correctAnswer": "  String"
              },
          
          
              "What is the size of a pointer in C?": {
                  "options": [
                      "  1 byte",
                      "  2 bytes",
                      "  4 bytes",
                      "  It depends on the system architecture"
                  ],
                  "correctAnswer": "  It depends on the system architecture"
              },
          
          
              "Which access specifier is used to make the members of a class accessible only within the same class?": {
                  "options": [
                      "  public",
                      "  private",
                      "  protected",
                      "  public and protected"
                  ],
                  "correctAnswer": "  private"
              },
          
          
              "What is operator overloading in C++?": {
                  "options": [
                      "  Defining a new operator.",
                      "  Overriding an existing operator.",
                      "  Changing the behavior of an existing operator.",
                      "  Changing the behavior of a new operator."
                  ],
                  "correctAnswer": "  Changing the behavior of an existing operator."
              },
          
          
              "What is the difference between ifstream and ofstream in C++?": {
                  "options": [
                      "  ifstream is used for input, while ofstream is used for output.",
                      "  ofstream is used for input, while ifstream is used for output.",
                      "  Both are used as input.",
                      "  Both are used as output."
                  ],
                  "correctAnswer": "  ifstream is used for input, while ofstream is used for output."
              },
          
          
              "What is a class template in C++?": {
                  "options": [
                      "  A class that can be used to create objects of different types.",
                      "  A function that can be used to create objects of different types.",
                      "  A variable that can be used to create objects of different types.",
                      "  A character that can be used to create objects of different types."
                  ],
                  "correctAnswer": "  A class that can be used to create objects of different types."
              },
          
          
              "What is the purpose of the control unit in a CPU?": {
                  "options": [
                      "  To perform arithmetic and logical operations on data.",
                      "  To store and retrieve data from memory.",
                      "  To interpret instructions and control the flow of data within the CPU.",
                      "  To print data from memory."
                  ],
                  "correctAnswer": "  To interpret instructions and control the flow of data within the CPU."
              },
          
          
              "What is the purpose of the cache replacement policy?": {
                  "options": [
                      "  To determine which data to store in the cache.",
                      "  To determine which data to evict from the cache when space is needed.",
                      "  To determine how many levels of cache to use.",
                      "  To determine which data to store in RAM."
                  ],
                  "correctAnswer": "  To determine which data to evict from the cache when space is needed."
              },
          
          
              "Which of the following is not a type of DMA transfer mode?": {
                  "options": [
                      "  Burst mode",
                      "  Cycle-stealing mode",
                      "  Interrupt mode",
                      "  Instruction mode."
                  ],
                  "correctAnswer": "  Instruction mode."
              },
          
          
              "An instruction set refers to a set of:": {
                  "options": [
                      "  Rules for writing code in a specific programming language.",
                      "  Instructions that a processor can execute.",
                      "  Input/output operations that a processor can perform.",
                      "  Printing commands."
                  ],
                  "correctAnswer": "  Instructions that a processor can execute."
              },
          
          
              "What is a real-time kernel?": {
                  "options": [
                      "  The core component of a real-time operating system.",
                      "  The user interface of a real-time operating system.",
                      "  The hardware component of a real-time operating system.",
                      "  The core component of a real-time pointer system."
                  ],
                  "correctAnswer": "  The core component of a real-time operating system."
              },
          
          
              "What is a signal in VHDL?": {
                  "options": [
                      "  A variable used to store a value in a digital circuit.",
                      "  A physical wire used to transmit data in a digital circuit.",
                      "  A function used to perform a specific task in VHDL.",
                      "  A file used to store a specific task."
                  ],
                  "correctAnswer": "  A physical wire used to transmit data in a digital circuit."
              },
          
          
              "Which of the following is an example of a physical layer protocol?": {
                  "options": [
                      "  Ethernet",
                      "  TCP",
                      "  HTTP",
                      "  ISP"
                  ],
                  "correctAnswer": "  Ethernet"
              },
          
          
              "The PPP of the OSI model operates at:": {
                  "options": [
                      "  Physical layer",
                      "  Data link layer",
                      "  Network layer",
                      "  Transport layer"
                  ],
                  "correctAnswer": "  Data link layer"
              },
          
          
              "Which of the following is a type of routing algorithm used in the network layer?": {
                  "options": [
                      "  Link-state routing",
                      "  Distance-vector routing",
                      "  Path-vector routing",
                      "  All of the above."
                  ],
                  "correctAnswer": "  All of the above."
              },
          
          
              "Which protocol is responsible for error detection and correction at the transport layer?": {
                  "options": [
                      "  TCP",
                      "  UDP",
                      "  ICMP",
                      "  ARP"
                  ],
                  "correctAnswer": "  TCP"
              },
          
          
              "Which application layer protocol is used for sending and receiving emails?": {
                  "options": [
                      "  HTTP",
                      "  FTP",
                      "  SMTP",
                      "  POP"
                  ],
                  "correctAnswer": "  SMTP"
              },
          
          
              "Which of the following is not a common type of firewall?": {
                  "options": [
                      "  Packet-filtering firewall",
                      "  Stateful inspection firewall",
                      "  Proxy firewall",
                      "  Encryption firewall"
                  ],
                  "correctAnswer": "  Encryption firewall"
              },
          
          
              "What are the basic limitations of a finite state machine?": {
                  "options": [
                      "  It cannot remember grammar for a language.",
                      "  It cannot remember arbitrarily large amounts of information.",
                      "  It cannot remember language generated from a grammar.",
                      "  It cannot remember state transitions."
                  ],
                  "correctAnswer": "  It cannot remember arbitrarily large amounts of information."
              },
          
          
              "Which of the following machines is specific for Context-Free Grammar?": {
                  "options": [
                      "  Finite state automata",
                      "  Push down automata",
                      "  Linear bounded automata",
                      "  Turing Machine"
                  ],
                  "correctAnswer": "  Push down automata"
                },
          
          
              "Turing Machine (TM) is more powerful than FSM (Finite State Machine) because:": {
                  "options": [
                      "  Tape movement is confined to one direction.",
                      "  It has no finite state.",
                      "  It has the capability to remember arbitrarily long sequences of input symbols.",
                      "  It has finite state."
                  ],
                  "correctAnswer": "  It has the capability to remember arbitrarily long sequences of input symbols."
              
          },
          
              "Which of these clustering techniques permits a convenient graphical display?": {
                  "options": [
                      "  Agglomerative clustering",
                      "  Hierarchical clustering",
                      "  Probabilistic model-based clustering",
                      "  Partition-based clustering"
                  ],
                  "correctAnswer": "  Hierarchical clustering"
              
          },
          
              "A straight line segment is translated by applying the transformation equation:": {
                  "options": [
                      "  P'=P+T",
                      "  Dx and Dy",
                      "  P'=P+P",
                      "  Cy"
                  ],
                  "correctAnswer": "  P'=P+T"
              
          },
          
              "What does composite transformations mean?": {
                  "options": [
                      "  Transformations that can be done in sequence.",
                      "  Transformations that cannot be done in sequence.",
                      "  Transformations that can be done simultaneously.",
                      "  Transformations that cannot be done simultaneously."
                  ],
                  "correctAnswer": "  Transformations that can be done in sequence."
              
          },
          
              "……………….. level is where the model becomes compatible and executable code.": {
                  "options": [
                      "  Abstract level",
                      "  Application level",
                      "  Implementation level",
                      "  All of the above."
                  ],
                  "correctAnswer": "  Implementation level"
              
          },
          
              "What is the hash function used in the division method?": {
                  "options": [
                      "  h(k) = k/m",
                      "  h(k) = k mod m",
                      "  h(k) = m/k",
                      "  h(k) = m mod k"
                  ],
                  "correctAnswer": "  h(k) = k mod m"
              
          },
          
              "Redundancy is reduced in a database table by using the --- form.": {
                  "options": [
                      "  Abnormal",
                      "  Normal",
                      "  Special",
                      "  Exactly"
                  ],
                  "correctAnswer": "  Normal"
              
          },
          
              "It is advisable to store the --- before applying the actual transaction to the database.": {
                  "options": [
                      "  Data",
                      "  Logs",
                      "  Receive",
                      "  Record"
                  ],
                  "correctAnswer": "  Logs"
              
          },
          
              "To enforce ……………….., two functions are provided: enter-critical and exit-critical, where each function takes as an argument the name of the resource that is the subject of competition.": {
                  "options": [
                      "  Mutual Exclusion",
                      "  Synchronization",
                      "  Deadlock",
                      "  Starvation"
                  ],
                  "correctAnswer": "  Mutual Exclusion"
              
          },
          
              "If you wanted to require that a user enter an Administrator password to perform administrative tasks, what type of user account should you create for the user?": {
                  "options": [
                      "  Administrator User account",
                      "  Standard User account",
                      "  Power User account",
                      "  Authenticated User account"
                  ],
                  "correctAnswer": "  Standard User account"
              
          },
          
              "The process to gather the software requirements from the client, analyze and document them is known as _____.": {
                  "options": [
                      "  Feasibility Study",
                      "  Requirement Gathering",
                      "  Requirement Engineering",
                      "  System Requirements Specification"
                  ],
                  "correctAnswer": "  Requirement Engineering"
              
          },
          
              "What is reference architecture?": {
                  "options": [
                      "  It is a reference model mapped onto software components.",
                      "  It provides data flow with comments.",
                      "  It provides data flow with pieces.",
                      "  It is a reference model mapped onto software components & data flow with comments."
                  ],
                  "correctAnswer": "  It is a reference model mapped onto software components."
              
          },
          
              "Which of the following testing is sometimes called Acceptance testing?": {
                  "options": [
                      "  White-box testing",
                      "  Grey box testing",
                      "  Alpha testing",
                      "  Beta testing"
                  ],
                  "correctAnswer": "  Beta testing"
              
          },
          
              "What is the purpose of representing system behavior in OOAD?": {
                  "options": [
                      "  To document system architecture and components.",
                      "  To identify potential risks and challenges.",
                      "  To understand and model the dynamic aspects of the system.",
                      "  To create user interfaces and interactions."
                  ],
                  "correctAnswer": "  To understand and model the dynamic aspects of the system."
              
          },
          
              "In object-oriented design, what does visibility refer to?": {
                  "options": [
                      "  The physical appearance of an object.",
                      "  The accessibility of class members from other parts of the program.",
                      "  The process of creating instances of classes.",
                      "  The relationship between classes in a system."
                  ],
                  "correctAnswer": "  The accessibility of class members from other parts of the program."
              
          },
          
              "How are relationships between classes represented when mapping design to code?": {
                  "options": [
                      "  Through inheritance and implementation of interfaces.",
                      "  Through the use of composition and aggregation.",
                      "  Through static method calls and global variables.",
                      "  Through conditional statements and loops."
                  ],
                  "correctAnswer": "  Through inheritance and implementation of interfaces."
              
          },
          
              "In which type of environment, the next state of the environment is completely determined by the current state and the action taken by the agent?": {
                  "options": [
                      "  Observable environment",
                      "  Deterministic environment",
                      "  Episodic environment",
                      "  Static environment"
                  ],
                  "correctAnswer": "  Deterministic environment"
              
          },
          
              "Which searching technique is guaranteed to find the optimal solution in a state space search problem, assuming no path costs?": {
                  "options": [
                      "  Depth-first search (DFS)",
                      "  Breadth-first search (BFS)",
                      "  Hill climbing",
                      "  A* search"
                  ],
                  "correctAnswer": "  Breadth-first search (BFS)"
              
          },
          
              "What is the main goal of the resolution algorithm in inference?": {
                  "options": [
                      "  To derive new logical axioms.",
                      "  To simplify logical expressions.",
                      "  To prove the satisfiability or un-satisfiability of a given set of logical statements.",
                      "  To find contradictions in the knowledge base."
                  ],
                  "correctAnswer": "  To prove the satisfiability or un-satisfiability of a given set of logical statements."
              
          },
          
              "What is the main goal of natural language understanding (NLU)?": {
                  "options": [
                      "  Translating text from one language to another.",
                      "  Generating human-like responses to user queries.",
                      "  Analyzing and interpreting the meaning of natural language text.",
                      "  Extracting entities and their relationships from a text."
                  ],
                  "correctAnswer": "  Analyzing and interpreting the meaning of natural language text."
              
          },
          
              "What is fuzzy learning in machine learning?": {
                  "options": [
                      "  A type of learning algorithm that uses fuzzy logic to handle uncertain or imprecise data.",
                      "  A learning technique that focuses on training neural networks with fuzzy inputs.",
                      "  A method that uses fuzzy inference to make predictions based on labeled data.",
                      "  A learning approach that emphasizes the use of fuzzy clustering algorithms."
                  ],
                  "correctAnswer": "  A type of learning algorithm that uses fuzzy logic to handle uncertain or imprecise data."
              
          },
          
              "Which neural network architecture is commonly used for processing sequential data, such as time series or natural language?": {
                  "options": [
                      "  Feed-forward neural network (FNN)",
                      "  Self-organizing map (SOM)",
                      "  Radial basis function network (RBFN)",
                      "  Recurrent neural network (RNN)"
                  ],
                  "correctAnswer": "  Recurrent neural network (RNN)"
              
          },
          
              "Standard dimensions (mm x mm) of A3 drawing sheet is:": {
                  "options": [
                      "  11.69 * 16.54",
                      "  29.7 * 42",
                      "  297 * 420",
                      "  420 * 280"
                  ],
                  "correctAnswer": "  297 * 420"
              
          },
          
              "Which of the following methods of charging depreciation of an asset has an increased amount of depreciation as the age of the asset increases?": {
                  "options": [
                      "  Sum-of-year digit",
                      "  Sinking fund",
                      "  Diminishing balance",
                      "  Straight line"
                  ],
                  "correctAnswer": "  Diminishing balance"
              
          },
          
              "The process of optimizing the project's limited resources without extending the project duration is known as:": {
                  "options": [
                      "  Project crashing",
                      "  Resource leveling",
                      "  Resource smoothing",
                      "  Networking"
                  ],
                  "correctAnswer": "  Resource smoothing"
              
          },
          
              "The process of composing/raising the required fund from different sources such as equity, preferred stock, bond, and debenture is known as:": {
                  "options": [
                      "  Capital structure planning",
                      "  Project financing",
                      "  Capital budgeting decision",
                      "  Deducting earning per share"
                  ],
                  "correctAnswer": "  Project financing"
              
          },
          
              "In which of the following societies, people used to seek their existence on growing plants for their cattle and domestic animals?": {
                  "options": [
                      "  Pastoral society",
                      "  Tribal society",
                      "  Horticultural society",
                      "  Agricultural society"
                  ],
                  "correctAnswer": "  Horticultural society"
              
          },
          
              "According to Nepal Engineering Council Act, 2055 (Revised, 2079), all engineering academic institutions shall be ……….. in the Council.": {
                  "options": [
                      "  Affiliated",
                      "  United",
                      "  Recognized",
                      "  Associated"
                  ],
                  "correctAnswer": "  Recognized"
              
          },
                //2 marks
                
                    
                        "A 10 μH inductor, (40 / pi square)) pF capacitor, and a 628 Ω resistor are connected to form a series RLC circuit. Calculate the Q-factor of this circuit at resonant frequency.": {
                            "options": [
                                "  1.0142x10^(-6)",
                                "  2.50",
                                "  1.0142x10^(-9)",
                                "  2.50x10^(-3)"
                            ],
                            "correctAnswer": "  2.50"
                        
                    },
                    
                        "A 400 mH coil of negligible resistance is connected to an AC circuit in which an effective current of 6 mA is flowing. Find out the voltage across the coil if the frequency is 1000 Hz.": {
                            "options": [
                                "  15.07V",
                                "  15079.67 V",
                                "  150.79 V",
                                "  15079 V"
                            ],
                            "correctAnswer": "  150.79 V"
                        
                    },
                    
                        "Convert (312) base 8 into decimal:": {
                            "options": [
                                "  (200)₁₀",
                                "  (202)₁₀",
                                "  (204)₁₀",
                                "  (206)₁₀"
                            ],
                            "correctAnswer": "  (202)₁₀"
                        
                    },
                    
                        "A microcontroller is running a program with a clock frequency of 8 MHz. The microcontroller receives an interrupt request from an external device that requires 20 cycles to service. What is the time required to service the interrupt?": {
                            "options": [
                                "  2.5 µs",
                                "  20 ns",
                                "  40 ns",
                                "  160 ns"
                            ],
                            "correctAnswer": "  2.5 µs"
                        
                    },
                    
                        "Output of the program below will be:  code: #include <iostream>\nclass Encapsulation {\n    private: int data;\n    public: Encapsulation(): data(0) {}\n    void setData(int value) {\n        data = value;\n    }\n    int getData() {\n        return data;\n    }\n};\nint main() {\n    Encapsulation obj;\n    std::cout << obj.getData() << std::endl;\n    return 0;\n}": {
                            "options": [
                                "  0",
                                "  Garbage value",
                                "  Compilation error",
                                "  Runtime error"
                            ],
                            "correctAnswer": "  0"
                        
                    },
                    
                        "What is the output of the following C code?  code: int x = 10, y = 20;\nint *p = &x, *q = &y;\n*p = *q;\n*q = 30;": {
                            "options": [
                                "  x = 10, y = 20",
                                "  x = 20, y = 30",
                                "  x = 30, y = 20",
                                "  x = 30, y = 30"
                            ],
                            "correctAnswer": "  x = 20, y = 30"
                        
                    },
                    
                        "What is the result of the (0x5A3D - 0x28F1) + 0xABCD in hexadecimal notation?": {
                            "options": [
                                "  0x8D7F",
                                "  0x8E7E",
                                "  0x8F7D",
                                "  0x907C"
                            ],
                            "correctAnswer": "  0x8D7F"
                        
                    },
                    
                        "What is the output of the y <= (a and   xor (not b and  ; VHDL code?": {
                            "options": [
                                "  AND gate",
                                "  OR gate",
                                "  XOR gate",
                                "  NAND gate"
                            ],
                            "correctAnswer": "  XOR gate"
                        
                    },
                    
                        "What is the data rate required to transmit a signal with a maximum frequency component of 10KHz for 8 bits per symbol?": {
                            "options": [
                                "  80 KBPs",
                                "  160 KBPs",
                                "  < 160 KBPs",
                                "  < 80 KBPs"
                            ],
                            "correctAnswer": "  160 KBPs"
                        
                    },
                    
                        "A data packet of size 1500 bytes is to be transmitted over a network crossing 2 routers in between. Each network layer adds a header of 20 bytes. The packet is then encapsulated by a data link layer that adds a header of 30 bytes and a trailer of 10 bytes. What is the total size of the packet, including all headers and the data payload?": {
                            "options": [
                                "  1550 bytes",
                                "  1560 bytes",
                                "  1620 bytes",
                                "  1680 bytes"
                            ],
                            "correctAnswer": "  1620 bytes"
                        
                    },
                    
                        "Consider CFG with {S,A,B} as the non-terminal alphabet, {a,b} as the terminal alphabet, S as the start symbol, and the following set of production rules: S->aB, S->bA, B->aB->bS, A->aS, B->aBB, A->bAA. Which of the following strings is generated by the grammar?": {
                            "options": [
                                "  aaaabb",
                                "  aabbbb",
                                "  aabbab",
                                "  abbbba"
                            ],
                            "correctAnswer": "  aabbab"
                        
                    },
                    
                        "An efficient transformation method that produces a parallel mirror image of an object is also referred to as:": {
                            "options": [
                                "  Rotation",
                                "  Reflection",
                                "  Shear",
                                "  Rotation and shear"
                            ],
                            "correctAnswer": "  Reflection"
                        
                    },
                    
                        "What does the following function do for a given Linked List with the first node as head?code: void fun1(struct node* hea \n{\n    if (head == NULL)\n        return;\n    fun1(head->next);\n    printf(\%d \, head->dat ;\n}": {
                            
                            "options": [
                                "  Prints all nodes of the linked list.",
                                "  Prints all nodes of the linked list in reverse order.",
                                "  Prints alternate nodes of the linked list.",
                                "  Prints alternate nodes in reverse order."
                            ],
                            "correctAnswer": "  Prints all nodes of the linked list in reverse order."
                        
                    },
                    
                        "Consider the following three processes in the FCFS:  table: | Process ID | Burst-time | Arrival-time |\n|------------|------------|--------------|\n| P1         | 3          | 3            |\n| P2         | 6          | 6            |\n| P3         | 9          | 9            |": {
                            "question": "What is the average waiting time?",
                            "options": [
                                "  2",
                                "  3",
                                "  4",
                                "  5"
                            ],
                            "correctAnswer": "  3"
                        
                    },
                    
                        "Which of the following statements best describes the role of a configuration management tool in software engineering?": {
                            "options": [
                                "  It helps a graphical user interface for designing software architectures.",
                                "  It helps the process of generating code from high-level models or specifications.",
                                "  It helps track, control, and manage changes to software artifacts throughout the development lifecycle.",
                                "  It helps the testing and debugging of software applications to ensure their correctness."
                            ],
                            "correctAnswer": "  It helps track, control, and manage changes to software artifacts throughout the development lifecycle."
                        
                    },
                    
                        "What is the correct order of phases in the Object-Oriented Development Cycle?": {
                            "options": [
                                "  Analysis, Design, Implementation, Testing, Maintenance",
                                "  Design, Analysis, Implementation, Maintenance, Testing",
                                "  Analysis, Design, Implementation, Maintenance, Testing",
                                "  Design, Analysis, Testing, Implementation, Maintenance"
                            ],
                            "correctAnswer": "  Analysis, Design, Implementation, Testing, Maintenance"
                        
                    },
                    
                        "Greedy Best-First Search is an informed search algorithm that:": {
                            "options": [
                                "  Expands nodes based on their depth in the search tree.",
                                "  Expands nodes based on their evaluation function value.",
                                "  Expands nodes randomly without any heuristic guidance.",
                                "  Expands nodes in a breadth-first manner."
                            ],
                            "correctAnswer": "  Expands nodes based on their evaluation function value."
                        
                    },
                    
                        "Which of the following activation functions is commonly used for the output layer of a binary classification neural network?": {
                            "options": [
                                "  Sigmoid activation function",
                                "  Tanh activation function",
                                "  ReLU activation function",
                                "  Softmax activation function"
                            ],
                            "correctAnswer": "  Sigmoid activation function"
                        
                    },
                    
                        "Effective monthly interest rate will be ………., if the nominal interest rate of 10% is accounted for continuous compounding.": {
                            "options": [
                                "  1%",
                                "  0.84%",
                                "  1.2%",
                                "  2%"
                            ],
                            "correctAnswer": "  0.84%"
                        
                    },
                    
                        "By considering the following activities of a project, the project duration will be:  table: | Activity | A | B | C | D | E |\n|----------|---|---|---|---|---|\n| Immediate predecessors | - | - | - | C | A, B, D |\n| Duration (days) | 4 | 5 | 3 | 7 | 5 |": {
                            "question": "What is the project duration?",
                            "options": [
                                "  9 days",
                                "  10 days",
                                "  15 days",
                                "  24 days"
                            ],
                            "correctAnswer": "  15 days"
                        
                    },
                
      
          // ... more questions
      
});
    const [score, setScore] = useState(0);
    const navigate = useNavigate();

  const pdfs = [
    { name: 'Aerospace/Aeronautical Engineering', url: '/pdfs/aeronautical.pdf' },
    { name: 'Agricultural Engineering', url: '/pdfs/agricultural.pdf' },
    { name: 'Architecture', url: '/pdfs/architecture.pdf' },
    { name: 'Automobile Engineering', url: '/pdfs/automobile.pdf' },
    { name: 'Biomedical Engineering', url: '/pdfs/bioMedical.pdf' },
    { name: 'Civil Engineering', url: '/pdfs/civil.pdf' },
    { name: 'Civil and Rural Engineering', url: '/pdfs/civil&rural.pdf' },
    { name: 'Computer Engineering', url: '/pdfs/computer.pdf' },
    { name: 'Electrical Engineering', url: '/pdfs/electrical.pdf' },
    { name: 'Electrical and Electronic Engineering', url: '/pdfs/electrical&electronics.pdf' },
    { name: 'Electronics and Communication Engineering/Electronics and Telecommunication Engineering/Information Technology and Telecommunication Engineering', url: '/pdfs/electronics.pdf' },
    { name: 'Geomatics Engineering', url: '/pdfs/geomatics.pdf' },
    { name: 'Mechatronics Engineering', url: '/pdfs/mechanical.pdf' },
    { name: 'Software Engineering', url: '/pdfs/software.pdf' },
  ];

  const handlePdfClick = (pdf) => {
    setSelectedPdf(pdf);
    setIsFullscreen(true);
  };

  const handleCloseFullscreen = () => {
    setIsFullscreen(false);
  };

  const handleStartMockTest = () => {
    setShowAssessment(true);
    setIsQuizFullscreen(true); // Go fullscreen
    document.documentElement.requestFullscreen(); // Browser fullscreen
  };

  const handleAssessmentSubmit = (finalScore) => {
    setScore(finalScore);
    setShowAssessment(false);
    document.exitFullscreen(); // Exit browser fullscreen
    setIsQuizFullscreen(false); // Reset quiz fullscreen state
    console.log("Exam submitted with score:", finalScore);
    navigate('/results', { state: { score: finalScore } });
  };




  return (
    <div className="courses-container"> {/* Added container for styling */}
      <div className='mock-test-container'>
        <h3>Mock Test</h3>
        <button onClick={handleStartMockTest}>Start Exam</button>
      </div>
      
      {showAssessment && ( // Conditional rendering!
                <Quiz questions={examQuestions} onSubmit={handleAssessmentSubmit} />
            )}

      <div className="syllabus-container">
        <h3>Syllabus</h3>
        <ul>
          {pdfs.map((pdf) => (
            <li key={pdf.url}>
              <button onClick={() => handlePdfClick(pdf)}>
                {pdf.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selectedPdf && (
        <div className={`pdf-viewer ${isFullscreen ? 'fullscreen' : ''}`}>
          <button className="close-fullscreen" onClick={handleCloseFullscreen}>
            Close Fullscreen
          </button>
          <h4>Selected Syllabus: {selectedPdf.name}</h4>
          <iframe
            src={selectedPdf.url}
            width="100%"
            height="100%"
            title={selectedPdf.name}
            allowFullScreen // Important for some browsers
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Courses;