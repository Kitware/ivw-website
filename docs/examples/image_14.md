# Rotorcraft Simulation with HELIOS

![Rotorcraft Simulation with HELIOS](/image_14.jpg)

Rotorcraft simulation workflows present a complex, multidisciplinary challenge, as they necessitate the integration of moving-body aerodynamics with structural dynamics for rotor blade deformation, and vehicle flight dynamics and controls. Furthermore, the extensive data generated during a rotorcraft CFD simulation, stemming from numerous timesteps, can be substantial.

By incorporating in situ capabilities directly into the simulation workflow, developers and analysts can scrutinize crucial variables at each timestep, thereby avoiding the significant overhead associated with I/O and storage. This methodology not only optimizes HPC resource utilization but also facilitates real-time steering, swift validation, and more insightful diagnostics during protracted simulations. The accompanying images illustrate this approach using CREATE's HELIOS framework, which leverages ParaView Catalyst for in situ visualization and analysis.

**Frameworks used:** ParaView, Catalyst
