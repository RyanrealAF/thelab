
import { Chapter } from './types';

export const CHAPTERS: Chapter[] = [
  {
    id: 'intro',
    title: 'Introduction',
    subtitle: 'The Invisible Prison',
    content: `
      Imagine trying to live your life—trying to work, trying to just survive—but every single essential action you take is systematically reframed by an unseen network as something malicious, criminal, or paranoid.
      
      This is the reality of **Structural Malice**: a strategic, prolonged assault on a human being's reality, meticulously documented across three grueling years. This ebook deep dives into the tactics of this assault, the systematic defense mechanism known as the **Inversion Doctrine**, and the radical philosophy that turns hitting rock bottom into a source of weaponized power.
      
      We analyze the case of Ryan Borland, a digital creator who shifted his operational mindset from pleading for innocence to weaponizing his own truth through an irrefutable forensic record.
    `,
    glossary: {
      "Structural Malice": "An environment where hostility is embedded into the fabric of daily life, making it systemic rather than personal or random.",
      "Open-Air Prison": "A state where a subject is trapped by pervasive suspicion and systematic exclusion from resources, despite no physical walls."
    }
  },
  {
    id: 'mechanisms',
    title: 'The Blueprint of Persecution',
    subtitle: 'Structural Malice & Plausible Deniability',
    content: `
      The foundational concept is **Structural Malice**. It differs from bad luck in its coordination and intent to impede fundamental life functions. 
      
      The core mechanism is **Plausible Deniability**. Every hostile act is crafted to look like a coincidence or an overreaction. This creates an 'unbridgeable gap' to the outside world, placing the burden of proof on the victim who can only offer subjective 'feelings' against a neutral-seeming facade.
      
      ### The Three Pillars of Assault:
      1. **Destruction of Sanctuary**: Erasing the sense of safety to prevent psychological recovery and induce cognitive overload.
      2. **Learned Helplessness**: Systematically blocking access to basic necessities (power, hygiene, work) until proactive behavior seems pointless.
      3. **Fake Assistance**: Offering traps or feigning friendship to shatter the victim's ability to trust anyone, including legitimate helpers.
    `,
    evidenceItems: [
      {
        type: 'doctrine',
        title: 'Emotional Progression',
        description: 'Anger -> Contempt -> Disgust. This sequence allows attackers to ethically justify dehumanization.'
      }
    ]
  },
  {
    id: 'case-study',
    title: 'The Case of Ryan Borland',
    subtitle: 'Behavioral Misrepresentation',
    content: `
      As an independent digital content creator navigating housing instability, Ryan Borland became an easy target for sustained scrutiny. His routine, necessary behaviors were twisted into sinister narratives:
      
      *   **Essential Professional Activity**: Using public outlets to charge work devices was framed as 'loitering' or 'stalking'.
      *   **Mobility Strategy**: Moving frequently to minimize impact was misinterpreted as 'casing businesses' or 'illicit surveillance'.
      *   **Passive Defense**: Maintaining silence to de-escalate was perversely framed as 'predatory silence' or an 'admission of guilt'.
      
      When direct entrapment attempts failed, the attackers resorted to manufactured evidence and the rapid dissemination of unverified reports through informal channels.
    `
  },
  {
    id: 'inversion',
    title: 'The Inversion Doctrine',
    subtitle: 'From Victim to Data Analyst',
    content: `
      The Inversion Doctrine is the core defense strategy. It shifts the perspective from subjective trauma to objective data collection. 
      
      The **Forensic Crucible** requires brutal emotional discipline: stop explaining how you feel and start documenting what occurred. This data logging acts as an emotional buffer against paranoia and gaslighting.
      
      ### Signatures of Coordination:
      To break plausible deniability, the subject must map **Intent** and **Access**. 
      *   **Cross-Vector Coordination**: Seamless transitions between different vectors (e.g., a bank denial immediately followed by a targeted stranger approach).
      *   **Resource Expenditure**: Evidence of sustained spending on surveillance or informants.
    `,
    evidenceItems: [
      {
        type: 'log',
        title: 'Local Incident Tracker',
        description: 'Fields: Timestamp, Location (GPS), Incident Type, Actors involved, Subject Action, Context, Witness Status.'
      }
    ]
  },
  {
    id: 'infrastructure',
    title: 'The Breadcrumb Web',
    subtitle: 'Protective Digital Architecture',
    content: `
      The **Breadcrumb Web Protocol** is a digital evidence system that guarantees context and counter-evidence.
      
      1.  **Contextual Movement Logs**: Documenting *why* a move was made (to charge a device, meet a deadline, etc.).
      2.  **Content as Record**: Artistic and journalistic output serving as timestamped evidence of mental state and peaceful conduct.
      3.  **Redundant Backup**: Data spread across multiple cloud platforms and encrypted physical devices.
      4.  **Dead Man's Switch**: A protocol ensuring that if the subject is silenced, the complete dossier is automatically released.
    `
  },
  {
    id: 'rumor',
    title: 'The Art of Defiance',
    subtitle: 'Analysis of "Rumor"',
    content: `
      Borland's creative response, specifically the song **"Rumor"**, is a philosophical manifesto delivered with a surgical cadence and gritty boom-bap aesthetic.
      
      ### The Five Phases of Resilience:
      1.  **The Descent (Basement)**: Physical deprivation and isolation.
      2.  **The Grind (Transit)**: Constant motion and hyper-vigilance.
      3.  **The Danger Zone (Rooftop)**: Philosophical turning point at twilight.
      4.  **Defiance (Storm)**: Explosion of will and refusal of labels.
      5.  **The Echo (Void)**: Survival as a permanent statement beyond reach.
      
      The central metaphor: *'I move like a rumor that won't stop.'* By embodying the invisibility and persistence of a rumor, he makes himself impossible to erase.
    `
  },
  {
    id: 'rock-bottom',
    title: 'The Power of Rock Bottom',
    subtitle: 'The Danger of Empty Hands',
    content: `
      *'When you got nothing left, you dangerous then.'*
      
      Losing everything eliminates the ultimate weapon of the attacker: the fear of loss. When there is nothing left to take, the attacker's leverage evaporates. 
      
      Perceived poverty and enforced precarity become a weaponized source of power because the rules of engagement no longer apply. The attack itself is reframed as evidence of the subject's threat level—a confirmation of vitality, not failure.
      
      **Conclusion**: Rock bottom has an echo. Survival is the ultimate act of self-determination. If you cannot stop the malice, you can ensure it leaves an irrefutable record behind.
    `
  }
];
