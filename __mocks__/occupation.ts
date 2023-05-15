import { AssessingAuthorityAbv } from 'Interfaces/Database/Occupation/occupation';
import { OccupationDetailRes } from 'Queries/occupations/Detail/interface';

export const testOccupation: OccupationDetailRes = {
  _id: '4c03f4c5500949d8be9fade2d4b6d7a6',
  anzsco_section: {
    _type: 'anzsco_obj',
    alternative_title: {
      en: [],
    },
    description: {
      en: 'This occupation group covers Health and Welfare Services Managers not elsewhere classified.',
    },
    major_group: 1,
    minor_group: 13,
    nec_occupation: {
      en: [
        'DirectorofPharmacy',
        'DirectorofPhysiotherapyServices',
        'DirectorofSpeechPathology',
        'ManagerofAlliedHealthServices',
        'DisabilityServicesProgramManager',
      ],
    },
    priority_list: [
      {
        _key: '08e813a79592',
        _type: 'priority_list_obj',
        ACT: 'NS',
        future_demend: 'Strong',
        national: 'NS',
        NSW: 'NS',
        NT: 'NS',
        QLD: 'NS',
        SA: 'NS',
        TAS: 'NS',
        VIC: 'NS',
        WA: 'NS',
        year: '2022-01-01',
      },
    ],
    specialisations: {
      en: [],
    },
    submajor_group: 134,
    unit_group: {
      code: 1342,
      description: {
        en: 'Plans, organises, directs, controls and coordinates nursing programs and clinical services in a hospital, aged care or other health service facility, maintains standards of nursing care, provides leadership to ensure an appropriately skilled nursing and midwifery workforce, and contributes to health service planning. Registration or licensing may be required.',
      },
      skill_level: '1',
      tasks: {
        en: [
          'Providing overall direction and management for the service, facility, organisation or centre',
          'Developing, implementing and monitoring procedures, policies and standards for medical, nursing, allied health and administrative staff',
          'Coordinating and administering health and welfare programs and clinical services',
          'Monitoring and evaluating resources devoted to health, welfare, recreation, housing, employment, training and other community facilities and centres',
          'Controlling administrative operations such as budget planning, report preparation, expenditure on supplies, equipment and services',
          'Liaising with other health and welfare providers, boards and funding bodies to discuss areas of health and welfare service cooperation and coordination',
          'Advising government bodies about measures to improve health and welfare services and facilities',
          'Representing the organisation in negotiations, and at conventions, seminars, public hearings and forums',
          'Controlling selection, training and supervision of staff',
        ],
      },
      title: {
        en: 'Health and Welfare Services Managers',
      },
    },
  },
  assessing_authority: 'VETASSESS_A' as AssessingAuthorityAbv,
  backlog_section: {
    _type: 'backlog_obj',
    submited_190: {
      _type: 'backlog_numbers_obj',
      upper_than_65: '<20',
      upper_than_70: '<20',
      upper_than_75: '<20',
      upper_than_80: '<20',
      upper_than_85: '<20',
      upper_than_95: '<20',
      upper_than_100: '<20',
      upper_than_105: '<20',
      upper_than_110: '<20',
      upper_than_115: '<20',
      upper_than_125: '<20',
      upper_than_130: '<20',
    },
    submited_491: {
      _type: 'backlog_numbers_obj',
      upper_than_65: '<20',
      upper_than_70: '<20',
      upper_than_75: '<20',
      upper_than_80: '<20',
      upper_than_85: '<20',
      upper_than_90: '<20',
      upper_than_95: '<20',
      upper_than_100: '<20',
      upper_than_105: '<20',
      upper_than_110: '<20',
      upper_than_115: '<20',
      upper_than_120: '<20',
      upper_than_125: '<20',
      upper_than_130: '<20',
    },
    submited_by_state_190: [
      {
        _key: 'd3ec69780689',
        _type: 'territory_backlog_obj',
        eoi_count: '<20',
        territory: {
          _ref: '90d991b47098ceef3d8283a386cf7e91',
          _type: 'reference',
          _weak: true,
        },
      },
      {
        _key: 'd3ec69780689',
        _type: 'territory_backlog_obj',
        eoi_count: '21',
        territory: {
          _ref: '7fd51c89695b098a88a38f57ae4bfb2d',
          _type: 'reference',
          _weak: true,
        },
      },
      {
        _key: 'd3ec69780689',
        _type: 'territory_backlog_obj',
        eoi_count: '<20',
        territory: {
          _ref: 'cb48af3e40ab9ec3622c07b8faf27cf3',
          _type: 'reference',
          _weak: true,
        },
      },
      {
        _key: 'd3ec69780689',
        _type: 'territory_backlog_obj',
        eoi_count: '<20',
        territory: {
          _ref: 'c6f45fe1ff59e2232e252c632252c728',
          _type: 'reference',
          _weak: true,
        },
      },
      {
        _key: 'd3ec69780689',
        _type: 'territory_backlog_obj',
        eoi_count: '<20',
        territory: {
          _ref: '3dd6b9265ff18f31dc30df59304b0ca7',
          _type: 'reference',
          _weak: true,
        },
      },
      {
        _key: 'd3ec69780689',
        _type: 'territory_backlog_obj',
        eoi_count: '<20',
        territory: {
          _ref: 'f4e1b83458954d7218793cee79be80b0',
          _type: 'reference',
          _weak: true,
        },
      },
      {
        _key: 'd3ec69780689',
        _type: 'territory_backlog_obj',
        eoi_count: '<20',
        territory: {
          _ref: 'd48afc599a256e036954100b5cfbe360',
          _type: 'reference',
          _weak: true,
        },
      },
      {
        _key: 'd3ec69780689',
        _type: 'territory_backlog_obj',
        eoi_count: '<20',
        territory: {
          _ref: '4306a04670067b5b27e766335d3d40fa',
          _type: 'reference',
          _weak: true,
        },
      },
    ],
    submited_by_state_491: [
      {
        _key: 'd3ec69780689',
        _type: 'territory_backlog_obj',
        eoi_count: '<20',
        territory: {
          _ref: '90d991b47098ceef3d8283a386cf7e91',
          _type: 'reference',
          _weak: true,
        },
      },
      {
        _key: 'd3ec69780689',
        _type: 'territory_backlog_obj',
        eoi_count: '21',
        territory: {
          _ref: '7fd51c89695b098a88a38f57ae4bfb2d',
          _type: 'reference',
          _weak: true,
        },
      },
      {
        _key: 'd3ec69780689',
        _type: 'territory_backlog_obj',
        eoi_count: '<20',
        territory: {
          _ref: 'cb48af3e40ab9ec3622c07b8faf27cf3',
          _type: 'reference',
          _weak: true,
        },
      },
      {
        _key: 'd3ec69780689',
        _type: 'territory_backlog_obj',
        eoi_count: '<20',
        territory: {
          _ref: 'c6f45fe1ff59e2232e252c632252c728',
          _type: 'reference',
          _weak: true,
        },
      },
      {
        _key: 'd3ec69780689',
        _type: 'territory_backlog_obj',
        eoi_count: '<20',
        territory: {
          _ref: '3dd6b9265ff18f31dc30df59304b0ca7',
          _type: 'reference',
          _weak: true,
        },
      },
      {
        _key: 'd3ec69780689',
        _type: 'territory_backlog_obj',
        eoi_count: '<20',
        territory: {
          _ref: 'f4e1b83458954d7218793cee79be80b0',
          _type: 'reference',
          _weak: true,
        },
      },
      {
        _key: 'd3ec69780689',
        _type: 'territory_backlog_obj',
        eoi_count: '<20',
        territory: {
          _ref: 'd48afc599a256e036954100b5cfbe360',
          _type: 'reference',
          _weak: true,
        },
      },
      {
        _key: 'd3ec69780689',
        _type: 'territory_backlog_obj',
        eoi_count: '<20',
        territory: {
          _ref: '4306a04670067b5b27e766335d3d40fa',
          _type: 'reference',
          _weak: true,
        },
      },
      {
        _key: 'd3ec69780689',
        _type: 'territory_backlog_obj',
        eoi_count: '<20',
        territory: {
          _ref: '90d991b47098ceef3d8283a386cf7e91',
          _type: 'reference',
          _weak: true,
        },
      },
      {
        _key: 'd3ec69780689',
        _type: 'territory_backlog_obj',
        eoi_count: '<20',
        territory: {
          _ref: '7fd51c89695b098a88a38f57ae4bfb2d',
          _type: 'reference',
          _weak: true,
        },
      },
      {
        _key: 'd3ec69780689',
        _type: 'territory_backlog_obj',
        eoi_count: '<20',
        territory: {
          _ref: 'cb48af3e40ab9ec3622c07b8faf27cf3',
          _type: 'reference',
          _weak: true,
        },
      },
      {
        _key: 'd3ec69780689',
        _type: 'territory_backlog_obj',
        eoi_count: '<20',
        territory: {
          _ref: 'c6f45fe1ff59e2232e252c632252c728',
          _type: 'reference',
          _weak: true,
        },
      },
      {
        _key: 'd3ec69780689',
        _type: 'territory_backlog_obj',
        eoi_count: '<20',
        territory: {
          _ref: '3dd6b9265ff18f31dc30df59304b0ca7',
          _type: 'reference',
          _weak: true,
        },
      },
      {
        _key: 'd3ec69780689',
        _type: 'territory_backlog_obj',
        eoi_count: '<20',
        territory: {
          _ref: 'f4e1b83458954d7218793cee79be80b0',
          _type: 'reference',
          _weak: true,
        },
      },
      {
        _key: 'd3ec69780689',
        _type: 'territory_backlog_obj',
        eoi_count: '<20',
        territory: {
          _ref: 'd48afc599a256e036954100b5cfbe360',
          _type: 'reference',
          _weak: true,
        },
      },
      {
        _key: 'd3ec69780689',
        _type: 'territory_backlog_obj',
        eoi_count: '<20',
        territory: {
          _ref: '4306a04670067b5b27e766335d3d40fa',
          _type: 'reference',
          _weak: true,
        },
      },
    ],
  },
  code: 134299,
  territory_section: [
    {
      html_desc:
        "<div id='tabs-act'>                          <h3 style='color:#FF6633;'><a href='https://www.act.gov.au/migration/skilled-migrants' target='_blank' rel='noopener'>Australian Capital Territory</a> <i class='icon-tiny fa fa-external-link'></i></h3>                          <h4 style='margin:20px 0px;'><a style='color: #333;' href='https://www.act.gov.au/migration/skilled-migrants/act-critical-skills-list' target='_blank' rel='noopener'>ACT Critical Skills List</a> <i class='icon-tiny fa fa-external-link'></i></h4><h5 style='padding-bottom:20px;'>121111: Aquaculture Farmer</h5><div style='overflow-x:auto;'><table id='tb'><tr><th style='text-align: center;'>Subclass 190</th><th style='text-align: center;'>Subclass 491</th><th>Nomination places available each month</th></tr><tr><td style='text-align:center;'><i style='color:indianred; font-size:26px;' class='fas fa-times' aria-hidden='true' title='Occupation MAY NOT be eligible'></i></td><td style='text-align:center;'><i style='color:indianred; font-size:26px;' class='fas fa-times' aria-hidden='true' title='Occupation MAY NOT be eligible'></i></td><td></td></tr></table></div>                          <div class='ftab'>                            <h5 style='padding-bottom:0px;'>General Requirements</h5>                            <p>Candidates must register their interest in ACT nomination by completing a score-based <a href='https://www.act.gov.au/migration/skilled-migrants/canberra-matrix' target='_blank' rel='noopener'>Canberra Matrix</a> <i class='icon-tiny fa fa-external-link'></i><br>                            Candidates may be nominated under four streams:</p>                            <ul>                              <li>Canberra Residents</li>                              <li>Overseas Applicants</li>                              <li>Doctorate Streamlined nomination</li>                              <li>Significant economic benefit</li>                            </ul>                            <h5 style='padding-bottom:0px;padding-top:10px;'>Requirements for Canberra Residents</h5>                            <p>Candidates applying for <u>Subclass 190</u> nomination must:</p>                            <ul>                              <li>Have an occupation on the ACT Critical Skills List; or be the primary holder of a 457/482 visa sponsored by an ACT employer for the last 6 months; or be the majority owner of an eligible ACT business claiming Matrix points in the Small Business Owner category.</li>                              <li>Have lived in Canberra for the last 6 months and continue until invitation.</li>                              <li>Have worked (35 hr/week) in Canberra for the last 6 months, in a continuous and genuine position.</li>                               <li>Have `Proficient` or `Superior` English (ANZSCO 351311 Chef, and ANZSCO skill level 3 to 5 are exempt).</li>                            </ul>                                  <p>Candidates applying for <u>Subclass 491</u> nomination must:</p>                            <ul>                              <li>Have an occupation on the ACT Critical Skills List; or be the primary holder of a 457/482 visa sponsored by an ACT employer for the last 3 months; or be the majority owner of an eligible ACT business claiming Matrix points in the Small Business Owner category.</li>                              <li>Have lived in Canberra for the last 3 months and continue until invitation.</li>                              <li>Have worked (20 hr/week) in Canberra for the last 3months, in a continuous and genuine position.</li>                              <li>Have `Proficient` or `Superior` English (ANZSCO 351311 Chef, and ANZSCO skill level 3 to 5 are exempt).</li>                            </ul>                                                        <h5 style='padding-bottom:0px;padding-top:10px;'>Requirements for Overseas Applicants</h5>                            <p>Candidates applying for <u>Subclass 190</u> nomination must:</p>                            <ul>                              <li>Have an occupation on the ACT Critical Skills List and be currently working full time in the nominated occupation.</li>                              <li>Have an ACT full time Job Offer in the nominated occupation, from a large enterprise trading in Canberra.</li>                              <li>Demonstrate commitment to Canberra (by market research).</li>                              <li>Have `Proficient` or `Superior` English (eligible passport holders are exempt).</li>                              <li>Be living overseas and have not lived in Australia for the last 12 months.</li>                              <li>Have access to sufficient settlement funds.</li>                            </ul>                            <p>Candidates applying for <u>Subclass 491</u> nomination must:</p>                            <ul>                              <li>Have an occupation on the ACT Critical Skills List and be currently working full time in the nominated occupation.                                <li>Have at least 3 years full time relevant work experience.</li>                              <li>Demonstrate ACT employability and commitment to Canberra (by market research).</li>                              <li>Have `Proficient` or `Superior` English (eligible passport holders are exempt).</li>                               <li>Be living overseas and have not lived in Australia for the last 12 months.</li>                              <li>Have access to sufficient settlement funds.</li>                            </ul>                                                        <h5 style='padding-bottom:0px;padding-top:10px;'>Doctorate Streamlined nomination</h5>                            <p>Candidates must:</p>                            <ul>                              <li>Have lived in Canberra for the last 12 months (interstate and overseas residents may be eligible if they completed their doctoral degree from an ACT within the last two years).</li>                              <li>Have completed a professional or research doctoral degree at an ACT university.</li>                            </ul>                            <h5 style='padding-bottom:0px;padding-top:10px;'>Significant economic benefit</h5>                            <ul>                              <li>Invitation can ONLY be initiated by the ACT government.</li>                            </ul>                            <h5 style='padding-bottom:0px;padding-top:10px;'>Links</h5>                            <ul>                              <li>                                <a href='https://www.act.gov.au/migration/skilled-migrants/act-government-process' target='_blank' rel='noopener'>ACT Government nomination</a> <i class='icon-tiny fa fa-external-link'></i>                              </li>                            </ul>                                                      </div>                        </div>                        ",
      territory: {
        abv: 'ACT',
        title: {
          en: 'Australian Capital Territory',
        },
      },
    },
    {
      html_desc:
        "<div id='tabs-nsw'>                          <h3 style='color:#FF6633;'><a href='https://www.nsw.gov.au/visas-and-migration/skilled-visas' target='_blank' rel='noopener'>New South Wales</a> <i class='icon-tiny fa fa-external-link'></i></h3>                                                                              <h4 style='margin:20px 0px;'><a style='color: #333;' href='https://www.nsw.gov.au/visas-and-migration/skilled-visas/nsw-skills-lists' target='_blank' rel='noopener'>NSW Skills Lists</a> <i class='icon-tiny fa fa-external-link'></i></h4>                          <h5 style='padding-bottom:20px;'>121111: Aquaculture Farmer</h5>                          <div style='overflow-x:auto;'>                          <table id='tb' class='dataTable'>                            <tr><th>Visa Subclass</th><th>Eligibility</th><th>Minimum Points</th><th>Years Experience</th></tr>                            <tr><td>NSW Subclass 190</td><td><span style='color: transparent; visibility:hidden;'>N</span><i style='color: indianred;' class='fa fa-times fa-2x'></i></td><td></td><td></td></tr><tr><td>NSW Subclass 491: Pathway 1 - Stream B</td><td><span style='color: transparent; visibility:hidden;'>N</span><i style='color: indianred;' class='fa fa-times fa-2x'></i></td><td></td><td></td></tr><tr><td>NSW Subclass 491: Pathway 2</td><td><span style='color: transparent; visibility:hidden;'>N</span><i style='color: indianred;' class='fa fa-times fa-2x'></i></td><td></td><td></td></tr>                          </table>                          </div>                          <div style='background-color:#ff000017; padding:20px 20px 10px 20px; border-radius: 5px; margin-bottom:30px; margin-top:10px;'>                            <div class='wpb_wrapper'>                              <div class='iwithtext'>                                <div class='iwt-icon'> <i style='color:red' class='icon-default-style fa fa-warning'></i> </div>                                <div class='iwt-text'> <b>Minimum Points & Years Experience:<br></b>                                Minimum point scores and skilled work experience outlined above are <b>ONLY</b> relevant for the Skilled Work Regional visa (subclass 491) under <b>Pathway 1 Stream B</b>.</div>                                <div class='clear'></div>                              </div>                            </div>                          </div>                          <div class='ftab'>                            <h5 style='padding-bottom:10px;padding-top:10px;'>Subclass 190 Basic Eligibility criteria</h5>                            <ul>                              <li>Candidates must have an eligible occupation within an ANZSCO unit group on the <a href='https://www.nsw.gov.au/visas-and-migration/skilled-visas/nsw-skills-lists' target='_blank' rel='noopener'>NSW Skills Lists (Skilled Nominated visa subclass 190)</a> <i class='icon-tiny fa fa-external-link'></i>.</li>                              <li>Candidates must be currently <b>residing in NSW</b> or <b>Offshore</b> and have continuously done so for a minimum of <b>6 months</b>.</li>                            </ul>                            <h5 style='padding-bottom:10px;'>Subclass 491 Basic Eligibility criteria</h5>                            <p>Candidates may be nominated under two pathways:</p>                            <ul>                              <li>Pathway 1 ` Apply directly to an RDA office (see participating regions below).</li>                              <ul style='margin-bottom:0px'>                                <li>Stream A - Established work history with a regional NSW-based employer</li>                                <li>Stream B - My skills are required in regional NSW</li>                              </ul>                              <li>Pathway 2 ` Be invited by Investment NSW.</li>                            </ul>                                                        <p><b>Requirements for Pathway 1 - Stream A</b></p>                            <ul>                              <li>Candidates must have an eligible occupation.</li>                              <li>Candidates must be currently <b>living</b> and <b>working</b> in a designated regional area of NSW and have continuously done so for the past <b>12 months</b>.</li>                              <li>The qualifying employment must be in the nominated (or closely related) occupation, with the same employer, deemed skilled by NSW and paid a minimum of $53,900 (pro-rated if under 38 hours/week).</li>                            </ul>                                                        <p><b>Requirements for Pathway 1 - Stream B</b></p>                            <ul>                              <li>Candidates must have an eligible occupation within an ANZSCO unit group on the <a href='https://www.nsw.gov.au/visas-and-migration/skilled-visas/nsw-skills-lists' target='_blank' rel='noopener'>NSW Skills Lists (Pathway 1 - Stream B)</a> <i class='icon-tiny fa fa-external-link'></i>.</li>                              <li>Candidates must meet the minimum skilled <b>work experience</b> and <b>point score</b> for their unit group as indicated in the <a href='https://www.nsw.gov.au/visas-and-migration/skilled-visas/nsw-skills-lists' target='_blank' rel='noopener'>NSW Skills Lists (Pathway 1 - Stream B)</a> <i class='icon-tiny fa fa-external-link'></i> (unless exempt by the Regional NSW study exemption).</li>                              <li>Candidates must be currently <b>residing in NSW</b> or <b>Offshore</b> and have continuously done so for a minimum of <b>3 months</b>.</li>                            </ul>                            <p><b>Requirements for Pathway 2</b></p>                            <ul>                              <li>Candidates must have an eligible occupation within an ANZSCO unit group on the <a href='https://www.nsw.gov.au/visas-and-migration/skilled-visas/nsw-skills-lists' target='_blank' rel='noopener'>NSW Skills Lists (Pathway 2)</a> <i class='icon-tiny fa fa-external-link'></i></li>                              <li>Candidates must be currently <b>residing in NSW</b> or <b>Offshore</b> and have continuously done so for a minimum of <b>3 months</b>.</li>                            </ul>                            <p style='margin-top:10px;'><b>Participating regions for Pathway 1 are:</b></p>                              <ul><li style='list-style:circle;'><a href='https://rdacc.org.au/skilled-migration/491-visa-applications/' target='_blank' rel='noopener'>RDA Central Coast</a> <i class='icon-tiny fa fa-external-link'></i></li><li style='list-style:circle;'><a href='https://rdacentralwest.org.au/skilled-migration/skilled-work-regional-visa-491-2022-2023/' target='_blank' rel='noopener'>RDA Central West</a> <i class='icon-tiny fa fa-external-link'></i></li><li style='list-style:circle;'><a href='https://www.rdafsc.com.au/skilled-work-regional-visa-subclass-491/' target='_blank' rel='noopener'>RDA Far South Coast</a> <i class='icon-tiny fa fa-external-link'></i></li><li style='list-style:circle;'><a href='http://rdafarwestnsw.org.au/skilled-work-regional-visa-subclass-491/' target='_blank' rel='noopener'>RDA Far West</a> <i class='icon-tiny fa fa-external-link'></i></li><li style='list-style:circle;'><a href='https://rdahunter.org.au/skilled-work-regional-visa-subclass-491/' target='_blank' rel='noopener'>RDA Hunter</a> <i class='icon-tiny fa fa-external-link'></i></li><li style='list-style:circle;'><a href='https://www.rdaillawarraskilledmigration.com.au/491-visa-overview' target='_blank' rel='noopener'>RDA Illawarra</a> <i class='icon-tiny fa fa-external-link'></i></li><li style='list-style:circle;'><a href='https://rdamnc.org.au/migration/skilled-work-regional-subclass-491-visa-2/' target='_blank' rel='noopener'>RDA Mid North Coast</a> <i class='icon-tiny fa fa-external-link'></i></li><li style='list-style:circle;'><a href='https://www.rdamurray.org.au/index.php/workforce/subclass-491-skilled-work-regional-provisional-visa/applying-for-a-491-visa-nomination/' target='_blank' rel='noopener'>RDA Murray</a> <i class='icon-tiny fa fa-external-link'></i></li><li style='list-style:circle;'><a href='https://www.rdani.org.au/skilled-migration/skilled-work-regional-visa-subclass-491/occupation-list-for-the-northern-inland.php' target='_blank' rel='noopener'>RDA Northern Inland</a> <i class='icon-tiny fa fa-external-link'></i></li><li style='list-style:circle;'><a href='https://www.rdanorthernrivers.org.au/migration/skilled-work-regional-visa-subclass-491-2/' target='_blank' rel='noopener'>RDA Northern Rivers</a> <i class='icon-tiny fa fa-external-link'></i></li><li style='list-style:circle;'><a href='https://www.rdaorana.org.au/migration/migrants/' target='_blank' rel='noopener'>RDA Orana</a> <i class='icon-tiny fa fa-external-link'></i></li><li style='list-style:circle;'><a href='https://rdariverina.org.au/491' target='_blank' rel='noopener'>RDA Riverina</a> <i class='icon-tiny fa fa-external-link'></i></li><li style='list-style:circle;'><a href='https://www.rdasi.org.au/regional-migration' target='_blank' rel='noopener'>RDA Southern Inland</a> <i class='icon-tiny fa fa-external-link'></i></li><li style='list-style:circle;'><a href='https://rdasydney.org.au/491-skilled-work-visa/' target='_blank' rel='noopener'>RDA Sydney</a> <i class='icon-tiny fa fa-external-link'></i></li></ul>                            <h5 style='padding:10px 0;'>Links</h5>                            <ul style='padding-bottom:20px;'>                              <li><a href='https://www.nsw.gov.au/visas-and-migration/skilled-visas' target='_blank' rel='noopener'>NSW Skilled Visas</a> <i class='icon-tiny fa fa-external-link'></i></li>                              <li><a href='https://www.nsw.gov.au/visas-and-migration/skilled-visas/nsw-skills-lists' target='_blank' rel='noopener'>NSW Skills Lists</a> <i class='icon-tiny fa fa-external-link'></i></li>                            </ul>                              <div style='background-color:#ddecff94;padding: 10px 20px; border-radius: 5px; margin-top:20px;'>    <div class='wpb_wrapper'>      <div class='iwithtext'>        <div class='iwt-icon'> <i class='icon-default-style fa fa-info-circle extra-color-1'></i> </div>        <div class='iwt-text'> The above is a summary of key/essential eligibility criteria; it is not an exhaustive list of requirements. You are encouraged to check all criteria on the relevant State/Territory website.</div>        <div class='clear'></div>      </div>    </div>  </div>                          </div>                                                  </div>                        ",
      territory: {
        abv: 'NSW',
        title: {
          en: 'New South Wales',
        },
      },
    },
    {
      html_desc:
        "<div id='tabs-nt'>                          <h3 style='color:#FF6633;'><a href='https://theterritory.com.au/migrate' target='_blank' rel='noopener'>Northern Territory</a> <i class='icon-tiny fa fa-external-link'></i></h3>                                                                                    <div style='display: flow-root;'>                                <div style='padding:10px 0px 10px 0px;' class='vc_col-sm-12 wpb_column column_container vc_column_container col child_column boxed no-extra-padding inherit_tablet inherit_phone ' data-shadow='small_depth' data-border-radius='3px' data-padding-pos='all' data-has-bg-color='false' data-bg-color='' data-bg-opacity='1' data-animation='' data-delay='0'>                                  <div class='vc_column-inner'>                                    <div class='column-bg-overlay-wrap' data-bg-animation='none'>                                        <div class='column-bg-overlay'></div>                                    </div>                                    <div class='wpb_wrapper'>                                        <div class='iwithtext'>                                          <div class='iwt-icon'> <i class='icon-default-style fa fa-info-circle extra-color-1'></i> </div>                                          <div class='iwt-text'>Occupation is in the <a href='https://www.anzscosearch.com/skilled-occupation-list/'>Combined List</a> (MLTSSL, STSOL or ROL list) and may be eligible if you meet the Northern Territory nomination requirements.</div>                                          <div class='clear'></div>                                        </div>                                    </div>                                  </div>                                </div>                                </div>                              <h4 style='margin:20px 0px;'><a style='color: #333;' href='https://theterritory.com.au/migrate/migrate-to-work/northern-territory-government-visa-nomination/nt-offshore-migration-occupation-list' target='_blank' rel='noopener'>NT Offshore Migration Occupations List (NTOMOL) for <u>Offshore applicants</u> (<u>Priority Occupation stream</u>)</a> <i class='icon-tiny fa fa-external-link'></i></h4><h5 style='padding-bottom:20px;'>121111: Aquaculture Farmer</h5><div style='overflow-x:auto;'><table id='tb'><tr><th width='15%'>Subclass 190</th><th width='15%'>Subclass 491</th><th>Comments</th></tr><tr><td style='text-align:center;'><span style='color: transparent; visibility:hidden;'>N</span><i style='color: indianred;' class='fa fa-times fa-2x'></i></td><td style='text-align:center;'><span style='color: transparent; visibility:hidden;'>N</span><i style='color: indianred;' class='fa fa-times fa-2x'></i></td><td></td></tr></table></div>                          <div class='ftab'>                            <h5 style='padding-bottom:10px;'>General Requirements</h5>                            <p>Candidates may be nominated under three streams/pathways:</p>                            <ul>                              <li>Onshore Applicants</li>                              <li>Offshore Applicants</li>                              <li>NT Graduates</li>                            </ul>                            <h5 style='padding-bottom:10px;padding-top:10px;'>Requirements for Onshore Applicants</h5>                            <p>Candidates must:</p>                            <ul>                              <li>Be currently living in Northern Territory (student visa holders who have not completed studies in an NT institution are not eligible).</li>                              <li>Have an occupation on the Department`s relevant `Combined List` (MLTSSL, STSOL or ROL).</li>                              <li>Provide strong evidence of good employment prospects in the NT.</li>                            </ul>                                  <p>To be considered for <b>Subclass 190</b> nomination, candidates must:</p>                            <ul>                              <li>have been residing in the NT for at least <b>2 years</b> immediately prior to application.</li>                              <li>demonstrate full-time employment in the NT in an eligible occupation for at least 2 years immediately prior to applying (the employment must be available for at least a further 12 months).</li>                            </ul>                            <p>To be considered for <b>Subclass 491</b> nomination, candidates must:</p>                            <ul>                              <li>have been residing in the NT for at least <b>12 months</b> immediately prior to application.</li>                              <li>demonstrate full-time employment in the NT in an eligible occupation for at least 6 months immediately prior to applying (the employment must be available for at least a further 12 months). If the occupation is not `an eligible occupation`, a candidate may exceptionally still be considered.</li>                            </ul>                                                        <h5 style='padding-bottom:10px;padding-top:10px;'>Requirements for Overseas Applicants</h5>                            <ul>                              <li>Have post-qualification work experience of at least 3 years in the nominated occupation.</li>                              <li>Demonstrate a genuine commitment to live and work in NT.</li>                              <li>Provide evidence of financial capacity.</li>                              <li>Meet the criteria relevant to one of the 3 streams:</li><br>                              <p><u>Priority occupation stream</u></p>                              <ul><li style='list-style:circle;'>Have an occupation on the Northern Territory Offshore Migration Occupation List (NTOMOL).</li></ul>                              <p><u>NT Family stream</u></p>                              <ul>                                <li style='list-style:circle;'>Have an eligible family member in the NT. This person must be a usual resident and must have lived in the NT for at least 12 months.</li>                                <li style='list-style:circle;'>Demonstrate genuine and sustained efforts to obtain employment from an NT employer.</li>                              </ul>                              <p><u>NT Job Offer stream</u></p>                              <ul><li style='list-style:circle;'>Have a job offer in the nominated occupation in an NT business that has been operating in the NT for at least 12 months.</li></ul>                            </ul>                                                        <h5 style='padding-bottom:10px;padding-top:10px;'>NT Graduates</h5>                            <p>Candidates must:</p>                            <ul>                              <li>Have completed two years of study in the NT.</li>                              <li>Have completed one or more qualifications at an NT-based institution in a single tertiary course or a set of nested tertiary courses.</li>                              <li>Have lived in the NT for the last 6 months while holding a visa that has no work limitations (if unable to live in the NT after completion of the course, the candidate will only be considered for Subclass 491).</li>                              <li>Demonstrate genuine and sustained efforts to obtain employment from an NT employer.</li>                            </ul>                                                        <h5 style='padding-bottom:10px;'>Links</h5>                            <ul style='padding-bottom:20px;'>                              <li><a href='https://theterritory.com.au/migrate/migrate-to-work/northern-territory-government-visa-nomination' target='_blank' rel='noopener'>Northern Territory - Visa Nomination</a> <i class='icon-tiny fa fa-external-link'></i>                              </li>                            </ul>                              <div style='background-color:#ddecff94;padding: 10px 20px; border-radius: 5px; margin-top:20px;'>    <div class='wpb_wrapper'>      <div class='iwithtext'>        <div class='iwt-icon'> <i class='icon-default-style fa fa-info-circle extra-color-1'></i> </div>        <div class='iwt-text'> The above is a summary of key/essential eligibility criteria; it is not an exhaustive list of requirements. You are encouraged to check all criteria on the relevant State/Territory website.</div>        <div class='clear'></div>      </div>    </div>  </div>                          </div>                        </div>                        ",
      territory: {
        abv: 'NT',
        title: {
          en: 'Northern Territory',
        },
      },
    },
    {
      html_desc:
        "<div id='tabs-qld'>                          <h3 style='color:#FF6633;'><a href='https://migration.qld.gov.au/visa-options/skilled-visas' target='_blank' rel='noopener'>Queensland</a> <i class='icon-tiny fa fa-external-link'></i></h3>                          <h4 style='margin:20px 0px;'><a style='color: #333;' href='https://migration.qld.gov.au/occupation-lists' target='_target' rel='noopener'>Queensland Skilled Occupation List (QSOL) for <u>Offshore Applicants</u></a> <i class='icon-tiny fa fa-external-link'></i></h4><h5 style='padding-bottom:20px;'>121111: Aquaculture Farmer</h5><div style='overflow-x:auto;'><table id='tb'><tr><th width='15%'>Subclass 190</th><th width='15%'>Subclass 491</th><th>Special Requirements</th></tr><tr><td style='text-align:center;'><span style='color: transparent; visibility:hidden;'>N</span><i style='color: indianred;' class='fa fa-times fa-2x'></i></td><td style='text-align:center;'><span style='color: transparent; visibility:hidden;'>N</span><i style='color: indianred;' class='fa fa-times fa-2x'></i></td><td></td></tr></table></div>                            <div class='ftab'>                              <h5 style='padding-bottom:10px;'>General Requirements</h5>                              <p>Candidates may be nominated under four streams:</p>                              <ul>                                <li><a href='https://migration.qld.gov.au/visa-options/skilled-visas/skilled-workers-living-in-queensland' target='_blank' rel='noopener'>Skilled workers living in QLD</a> <i class='icon-tiny fa fa-external-link'></i></li>                                <li><a href='https://migration.qld.gov.au/visa-options/skilled-visas/skilled-workers-living-offshore' target='_blank' rel='noopener'>Skilled workers living offshore</a> <i class='icon-tiny fa fa-external-link'></i></li>                                <li><a href='https://migration.qld.gov.au/visa-options/skilled-visas/graduates-of-a-queensland-university' target='_blank' rel='noopener'>Graduates of a QLD University</a> <i class='icon-tiny fa fa-external-link'></i></li>                                <li><a href='https://migration.qld.gov.au/visa-options/skilled-visas/small-business-owners-operating-in-regional-queensland' target='_blank' rel='noopener'>Small Business Owners in regional QLD</a> <i class='icon-tiny fa fa-external-link'></i></li>                              </ul>                              <h5 style='padding-bottom:10px;'>Requirements for Skilled workers living in QLD</h5>                              <p>Candidates must:</p>                              <ul>                                <li>Have a points-test result of <b>80</b> or higher for the <b>Subclass 190</b> (except for Trades occupations, which require 75 or higher) or, <b>65</b> or higher for the <b>Subclass 491</b>.</li>                                <li>Have an occupation on the Department`s relevant <a href='https://www.anzscosearch.com/skilled-occupation-list/' target='_target'>Combined List</a> <i class='icon-tiny fa fa-external-link'></i> (MLTSSL, STSOL or ROL).</li>                                <li>Have <b>Proficient English</b> or higher (except for Trades occupations).</li>                                <li>Have been living in QLD, undertaking full-time post-qualification employment (35 hrs/week) over the prescribed period in the nominated occupation. The prescribed period is `over the past <b>6 months`</b> for Subclass 190 and `over the past <b>3 months`</b> for Subclass <b>491</b>. </li>                                <li>Provide evidence of further 12 months of ongoing employment in QLD (virtual office is not accepted).</li>                              </ul>                              <p><i></i></p>                              <h5 style='padding-bottom:10px;'>Requirements for Skilled workers living Offshore</h5>                              <ul>                                <li>Have a points-test result of <b>80</b> or higher for the <b>Subclass 190</b> or, <b>65</b> or higher for the <b>Subclass 491</b>.</li>                                <li>Have an occupation on the `Offshore Queensland Skilled Occupation List` (QSOL).</li>                                <li>Have Proficient English or higher (except for Trades occupations).</li>                                <li>Have Minimum of 3-years of post-study work experience (except where otherwise specified). </li>                              </ul>                                                            <h5 style='padding-bottom:10px;'>Requirements for Graduates of a QLD university</h5>                              <ul>                                <li>Have a points-test result of <b>80</b> or higher for the <b>Subclass 190</b> or, <b>65</b> or higher for the <b>Subclass 491</b>.</li>                                <li>Provide evidence of employment in QLD (excludes PhD and Doctorate Graduates).</li>                                <li>Have <b>Proficient English</b>.</li>                                <li>Meet the additional criteria for their qualification level as indicated below.</li>                              </ul>                              <p><u>PhD and Doctorate Graduates (<b>190</b> and <b>491</b>) must:</u></p>                              <ul>                                <li>Be living onshore in QLD.</li>                                <li>Have completed 100% of the PhD or Doctorate at a QLD-based institution.</li>                                <li>Have had a decision on their thesis and graduated in the last 2 years.</li>                                <li>Have an occupation on the Department`s relevant <a href='https://www.anzscosearch.com/skilled-occupation-list/' target='_target'>Combined List</a> <i class='icon-tiny fa fa-external-link'></i> (MLTSSL, STSOL or ROL).</li>                              </ul>                              <p><u>Master`s degree Graduates (<b>190</b>) must:</u></p>                              <ul>                                <li>Be living onshore in QLD.</li>                                <li>Have completed 100% of the Master`s degree at a QLD-based institution.</li>                                <li>Have graduated in the last 2 years.</li>                                <li>Have a Master`s degree and skills assessment in a STEM field. </li>                                <li>Be employed full-time (35 hrs/week) in Queensland in the nominated or closely related STEM occupation.</li>                              </ul>                              <p><u>Master`s and Bachelor`s degree Graduates (<b>491</b>) must:</u></p>                              <ul>                                <li>Be living onshore in regional QLD.</li>                                <li>Have completed 100% of the degree at a QLD-based institution.</li>                                <li>Have graduated in the last 2 years.</li>                                <li>Have an occupation on the Department`s relevant <a href='https://www.anzscosearch.com/skilled-occupation-list/' target='_target'>Combined List</a> <i class='icon-tiny fa fa-external-link'></i> (MLTSSL, STSOL or ROL).</li>                                <li>Be employed full-time (35 hrs/week) in Queensland in the nominated or closely related occupation in regional QLD.</li>                                <li>Have a grade point average of 5.5 or higher (for Bachelor`s degree Graduates only). </li>                              </ul>                              <h5 style='padding-bottom:10px;'>Requirements for Small business owners in regional QLD</h5>                              <ul>                                <li>Have an occupation on the Department`s relevant <a href='https://www.anzscosearch.com/skilled-occupation-list/' target='_target'>Combined List</a> <i class='icon-tiny fa fa-external-link'></i> (MLTSSL, STSOL or ROL).</li>                                <li>Be on a visa that allows full-time work.</li>                                <li>Have purchased an existing business in regional QLD that have been operating for at least 2 years prior to purchase in the current location. </li>                                <li>Have purchased a business for a minimum of $100,000 OR have been operating a start-up for a minimum of 2 years with a turnover of $200,000 in the year prior to application.</li>                                <li>Have 100% ownership of the business.</li>                                <li>Have been trading in the business for 6 months before application.</li>                                <li>Employ 1 Australian resident, working a minimum of 20 hours per week, or 2 employees working 10 hours a week.</li>                                <li>Provide evidence of sufficient settlement funds. </li>                              </ul>                              <h5 style='padding-bottom:10px;'>Links</h5>                              <ul style='padding-bottom:20px;'>                                <li><a href='https://migration.qld.gov.au/program-updates/skilled-program' target='_blank' rel='noopener'>Queensland - Skilled Migration Program</a> <i class='icon-tiny fa fa-external-link'></i></li>                              </ul>                                <div style='background-color:#ddecff94;padding: 10px 20px; border-radius: 5px; margin-top:20px;'>    <div class='wpb_wrapper'>      <div class='iwithtext'>        <div class='iwt-icon'> <i class='icon-default-style fa fa-info-circle extra-color-1'></i> </div>        <div class='iwt-text'> The above is a summary of key/essential eligibility criteria; it is not an exhaustive list of requirements. You are encouraged to check all criteria on the relevant State/Territory website.</div>        <div class='clear'></div>      </div>    </div>  </div>                            </div>                                                    </div>                        ",
      territory: {
        abv: 'QLD',
        title: {
          en: 'Queensland ',
        },
      },
    },
    {
      html_desc:
        "<div id='tabs-sa'>                          <h3 style='color:#FF6633;'><a href='https://migration.sa.gov.au/skilled-migrants' target='_blank' rel='noopener'>South Australia</a> <i class='icon-tiny fa fa-external-link'></i></h3>                          <h4 style='margin:20px 0px;'><b><a style='color: #333;' href='https://migration.sa.gov.au/occupation-lists/south-australia-skilled-occupation-list' target='_blank' rel='noopener'>South Australia's Skilled Occupation List</a> <i class='icon-tiny fa fa-external-link'></i></b></h4><h5 style='padding-bottom:20px;'>121111: Aquaculture Farmer</h5><div style='overflow-x:auto;'><table id='tb' class='d1'><tr class='tr1'><th>Stream</th><th>Subclass 190</th><th>Subclass 491</th><th>Minimum Points</th></tr><tr><td>Graduates</td><td><span style='color: transparent; visibility:hidden;'>N</span><i style='color: indianred;' class='fa fa-times fa-2x'></i></td><td><span style='color: transparent; visibility:hidden;'>N</span><i style='color: indianred;' class='fa fa-times fa-2x'></i></td><td>65</td></tr><tr><td>Working in South Australia</td><td><span style='color: transparent; visibility:hidden;'>N</span><i style='color: indianred;' class='fa fa-times fa-2x'></i></td><td><span style='color: transparent; visibility:hidden;'>Y</span><i style='color: teal;' class='fa fa-check fa-2x'></i></td><td>65</td></tr><tr><td>Long-Term Residents</td><td><span style='color: transparent; visibility:hidden;'>N</span><i style='color: indianred;' class='fa fa-times fa-2x'></i></td><td><span style='color: transparent; visibility:hidden;'>Y</span><i style='color: teal;' class='fa fa-check fa-2x'></i></td><td>65</td></tr><tr><td>Outer Regional South Australia</td><td><span style='color: transparent; visibility:hidden;'>N</span><i style='color: indianred;' class='fa fa-times fa-2x'></i></td><td><span style='color: transparent; visibility:hidden;'>Y</span><i style='color: teal;' class='fa fa-check fa-2x'></i></td><td>65</td></tr><tr><td>Highly Skilled & Talented</td><td><span style='color: transparent; visibility:hidden;'>N</span><i style='color: indianred;' class='fa fa-times fa-2x'></i></td><td><span style='color: transparent; visibility:hidden;'>Y</span><i style='color: teal;' class='fa fa-check fa-2x'></i></td><td>65</td></tr><tr><td>Offshore</td><td><span style='color: transparent; visibility:hidden;'>N</span><i style='color: indianred;' class='fa fa-times fa-2x'></i></td><td><span style='color: transparent; visibility:hidden;'>N</span><i style='color: indianred;' class='fa fa-times fa-2x'></i></td><td>65</td></tr></table></div><p style='padding-top:10px;'><i style='padding-right:10px;color:#19176E' class='fa fa-info-circle extra-color-1'></i>For further details access directly the <a href='https://migration.sa.gov.au/occupation-lists/south-australia-skilled-occupation-list' target='_blank' rel='noopener'>South Australia's Skilled Occupation List</a> <i class='icon-tiny fa fa-external-link'></i>.</p>                                                    <h3 style='font-size:23px'>Available Streams</h3>                          <p>Candidates may be nominated under six streams:</p>                          <ul>                            <li><a href='https://www.migration.sa.gov.au/skilled-migrants/nomination-options/south-australian-graduates' target='_blank' rel='noopener'>South Australian Graduates</a> <i class='icon-tiny fa fa-external-link'></i></li>                            <li><a href='https://www.migration.sa.gov.au/skilled-migrants/nomination-options/working-in-south-australia' target='_blank' rel='noopener'>Working in South Australia</a> <i class='icon-tiny fa fa-external-link'></i></li>                            <li><a href='https://www.migration.sa.gov.au/skilled-migrants/nomination-options/long-term-residents' target='_blank' rel='noopener'>Long-Term Residents</a> <i class='icon-tiny fa fa-external-link'></i></li>                            <li><a href='https://www.migration.sa.gov.au/skilled-migrants/nomination-options/outer-regional-south-australia' target='_blank' rel='noopener'>Outer Regional South Australia</a> <i class='icon-tiny fa fa-external-link'></i></li>                            <li><a href='https://www.migration.sa.gov.au/skilled-migrants/nomination-options/highly-skilled-talented' target='_blank' rel='noopener'>Highly Skilled and Talented</a> <i class='icon-tiny fa fa-external-link'></i></li>                            <li><a href='https://www.migration.sa.gov.au/skilled-migrants/nomination-options/offshore' target='_blank' rel='noopener'>Offshore</a> <i class='icon-tiny fa fa-external-link'></i></li>                          </ul>                        </div>                        ",
      territory: {
        abv: 'SA',
        title: {
          en: 'South Australia ',
        },
      },
    },
    {
      html_desc:
        "<div id='tabs-tas'>                          <h3 style='color:#FF6633;'><a href='https://www.migration.tas.gov.au/skilled_migrants' target='_blank' rel='noopener'>Tasmania</a> <i class='icon-tiny fa fa-external-link'></i></h3>                          <h5 style='padding:20px 0px;'>121111: Aquaculture Farmer</h5><div style='overflow-x:auto;'><table id='tb' class='d1'><tr class='tr1'><th><a style='color:#333;' href='https://www.migration.tas.gov.au/news/migration_tasmania_document_library' target='_blank' rel='noopener'>Occupation Lists <i class='icon-tiny fa fa-external-link'></i></a></th><th style='text-align:center;'>Eligibility</th><th>Notes & caveats</th></tr><tr><td>'Gold' List - Critical Roles</td><td class='centre'><i style='color:indianred; font-size:26px;' class='fas fa-times' aria-hidden='true' title='Occupation NOT included in the list'></i></td><td></td></tr><tr ><td>Tasmanian Onshore Skilled Occupation List (TOSOL)</td><td class='centre'><i style='color:teal; font-size:26px;' class='fa fa-check' aria-hidden='true' title='Occupation included in the list'></i></td><td></td></tr><tr><td>Overseas Skilled Occupation Profiles (OSOP)</td><td class='centre'><i style='color:indianred; font-size:26px;' class='fas fa-times' aria-hidden='true' title='Occupation NOT included in the list'></i></td><td></td></tr></table></div>                              <p>Notes:</p>                              <ul>                                <li>An occupation included in the <b>'Gold' List - Critical Roles</b> will be prioritised in the Migration Tasmania Gateway.</li>                                <li>An occupation included in the <b>Tasmanian Onshore Skilled Occupation List (TOSOL)</b> is eligible for the <i>'Tasmanian Skilled Employment'</i> pathway (subclass 190).</li>                                <li>An occupation included in the <b>Overseas Skilled Occupation Profiles (OSOP)</b> list is eligible for the <i>'Overseas Applicant (OSOP) ` Invitation Only'</i> pathway.</li>                              </ul>                                                          <h3 style='font-size:23px'>Pathway Eligibility</h3>                              <h5 style='padding:20px 0;'>121111: Aquaculture Farmer</h5>                              <div style='overflow-x:auto;'>                                <table id='tb' class='d1'>                                  <tr class='tr1'><th>Pathway</th><th style='text-align:center;'><a style='color:#333;' href='https://www.migration.tas.gov.au/skilled_migrants/subclass_190_-_skilled_nominated_visa_2022-23' target='_blank' rel='noopener'>Subclass 190</a> <i class='icon-tiny fa fa-external-link'></i></th><th style='text-align:center;'><a style='color:#333;' href='https://www.migration.tas.gov.au/skilled_migrants/skilled_regional2' target='_blank' rel='noopener'>Subclass 491</a> <i class='icon-tiny fa fa-external-link'></i></th></tr>                                  <tr><td>Tasmanian Skilled Employment</td><td class='centre'><i style='color:indianred; font-size:26px;' class='fas fa-times' aria-hidden='true' title='Occupation MAY NOT be eligible'></i></td><td class='centre'><i style='color:#2934b7; font-size:26px;' class='fa fa-check' aria-hidden='true' title='Occupation is IN the Combined List and MAY be eligible if you meet the State/Territory nomination requirements'></i></td></tr>                                  <tr><td>Tasmanian Skilled Graduate</td><td class='centre'><i style='color:indianred; font-size:26px;' class='fas fa-times' aria-hidden='true' title='Occupation MAY NOT be eligible'></i></td><td class='centre'><i style='color:#2934b7; font-size:26px;' class='fa fa-check' aria-hidden='true' title='Occupation is IN the Combined List and MAY be eligible if you meet the State/Territory nomination requirements'></i></td></tr>                                  <tr><td>Tasmanian Established Resident</td><td class='centre'><i style='color:indianred; font-size:26px;' class='fas fa-times' aria-hidden='true' title='Occupation MAY NOT be eligible'></i></td><td class='centre'><i style='color:#2934b7; font-size:26px;' class='fa fa-check' aria-hidden='true' title='Occupation is IN the Combined List and MAY be eligible if you meet the State/Territory nomination requirements'></i></td></tr>                                  <tr><td>Tasmanian Business Operator</td><td class='centre'><i style='color:lightgrey; font-size:20px;' class='fa fa-minus' aria-hidden='true' title='Not Applicable'></i></td><td class='centre'><i style='color:#2934b7; font-size:26px;' class='fa fa-check' aria-hidden='true' title='Occupation is IN the Combined List and MAY be eligible if you meet the State/Territory nomination requirements'></i></td></tr>                                  <tr><td>Overseas Applicant (Job Offer)</td><td class='centre'><i style='color:lightgrey; font-size:20px;' class='fa fa-minus' aria-hidden='true' title='Not Applicable'></i></td><td class='centre'><i style='color:#2934b7; font-size:26px;' class='fa fa-check' aria-hidden='true' title='Occupation is IN the Combined List and MAY be eligible if you meet the State/Territory nomination requirements'></i></td></tr>                                  <tr><td>Overseas Applicant (OSOP) ` Invitation Only</td><td class='centre'><i style='color:lightgrey; font-size:20px;' class='fa fa-minus' aria-hidden='true' title='Not Applicable'></i></td><td class='centre'><i style='color:indianred; font-size:26px;' class='fas fa-times' aria-hidden='true' title='Occupation MAY NOT be eligible'></i></td></tr>                                </table>                              </div>                              <h5 style='padding:20px 0;'>Links</h5>                              <ul>                                <li><a href='https://www.migration.tas.gov.au/news/migration_tasmania_document_library' target='_blank' rel='noopener'>Tasmanian occupation lists</a> <i class='icon-tiny fa fa-external-link'></i></li>                                <li><a href='https://www.migration.tas.gov.au/skilled_migrants/subclass_190_-_skilled_nominated_visa_2022-23' target='_blank' rel='noopener'>Tasmania - Subclass 190 Pathways & Requirements</a> <i class='icon-tiny fa fa-external-link'></i></li>                                <li><a href='https://www.migration.tas.gov.au/skilled_migrants/skilled_regional2' target='_blank' rel='noopener'>Tasmania - Subclass 491 Pathways & Requirements</a> <i class='icon-tiny fa fa-external-link'></i></li>                                <li><a href='https://sbmtasmania.powerappsportals.com/' target='_blank' rel='noopener'>Migration Tasmania Application Gateway</a> <i class='icon-tiny fa fa-external-link'></i></li>                                <li><a href='https://www.migration.tas.gov.au/news/2021-2022_program_year_update' target='_blank' rel='noopener'>Tasmania Skilled Migration Program Updates</a> <i class='icon-tiny fa fa-external-link'></i></li>                              </ul>                                                    </div>                        ",
      territory: {
        abv: 'TAS',
        title: {
          en: 'Tasmania',
        },
      },
    },
    {
      html_desc:
        "<div id='tabs-vic'>                          <h3 style='color:#FF6633;'><a href='https://liveinmelbourne.vic.gov.au/migrate/skilled-migration-visas/2022-23-skilled-migration-visa-nomination-program' target='_blank' rel='noopener'>Victoria</a> <i class='icon-tiny fa fa-external-link'></i></h3>                                                    <p style='margin-top:20px;'><b>Victoria`s 2022-23 Skilled Visa Nomination Program</b> (Subclass 190 & 491) is available for:</p>                          <ul>                            <li>Onshore candidates living and working in Victoria</li>                            <li>Overseas applicants</li>                          </ul>                          <h5 style='padding-bottom:20px;'>121111: Aquaculture Farmer</h5>                          <p><b>ALL occupations</b> included in the <a href='https://www.anzscosearch.com/skilled-occupation-list/' target='_blank'>Combined list</a> <i class='icon-tiny fa fa-external-link'></i>(MLTSSL, STSOL or ROL list) may be eligible for nomination.</p>                                                    <p>To be considered for Victoria state nomination, you must submit a <a href='https://liveinmelbourne.vic.gov.au/migrate/skilled-migration-visas/registration-of-interest-for-victorian-state-visa-nomination' target='_blank' rel='noopener'><b>Registration of Interest (ROI)</b></a>  <i class='icon-tiny fa fa-external-link'></i></p>                          <p>The following <b>occupation groups</b> will be prioritised:</p>                          <ul>                            <li>Healthcare and social services</li>                            <li>Science, Technology, Engineering and Mathematics (STEM)</li>                            <li>Advanced manufacturing, digital and innovation economy</li>                            <li>Chef, cook, accommodation and hospitality managers ` for the 491 visa</li>                            <li>Early childhood, secondary and special education teachers</li>                          </ul>                          <p><a style='padding-bottom:120px;' href='https://liveinmelbourne.vic.gov.au/migrate/skilled-migration-visas/2022-23-skilled-migration-visa-nomination-program' target='_blank' rel='noopener'>Further information</a> <i class='icon-tiny fa fa-external-link'></i></p>                        </div>                        ",
      territory: {
        abv: 'VIC',
        title: {
          en: 'Victoria',
        },
      },
    },
    {
      html_desc:
        "<div id='tabs-wa'>                          <h3 style='color:#FF6633;'><a href='https://www.migration.wa.gov.au/services/skilled-migration-western-australia/wa-state-nomination-combined-occupation-list' target='_blank' rel='noopener'>Western Australia</a> <i class='icon-tiny fa fa-external-link'></i></h3>                          <h4 style='margin:20px 0px;'><b><a style='color: #333;' href='https://www.migration.wa.gov.au/services/skilled-migration-western-australia/wa-state-nomination-combined-occupation-list' target='_blank' rel='noopener'>WASMOL Combined list (Schedule 1, 2 & Graduates)</a> <i class='icon-tiny fa fa-external-link'></i></b></h4><h5 style='padding-bottom:20px;'>121111: Aquaculture Farmer</h5><div style='overflow-x:auto;'><table id='tb'><tr><th style='text-align:center;'>Subclass 190</th><th style='text-align:center;'>Subclass 491</th><th style='text-align:center;'>Schedule</th><th style='text-align:center;'>Graduate</th></tr><tr><td style='text-align:center;'><span style='color: transparent; visibility:hidden;'>N</span><i style='color: indianred;' class='fa fa-times fa-2x'></i></td><td style='text-align:center;'><span style='color: transparent; visibility:hidden;'>Y</span><i style='color: teal;' class='fa fa-check fa-2x'></i></td><td></td><td style='text-align:center;'><span style='color: transparent; visibility:hidden;'>Y</span><i style='color: teal;' class='fa fa-check fa-2x'></i></td></tr></table></div>                          <div class='ftab'>                            <h5 style='padding-bottom:10px;'>General Requirements</h5>                            <p>Candidates may be nominated under two streams:</p>                            <ul>                              <li>General stream</li>                              <li>Graduate stream</li>                            </ul>                            <p>Applicants for the General stream must satisfy Schedule 1 or Schedule 2 criteria, depending on their occupation.</p>                            <p><b>Schedule 1 criteria</b>, candidates must have:</p>                            <ul>                              <li>An occupation on the WASMOL.</li>                              <li>Competent English.</li>                              <li>At least one year of relevant Australian or overseas work experience.</li>                              <li>At least 6-months full-time contract of employment in Western Australia (only applicable for Subclass <b>190</b> visa.</li>                            </ul>                            <p><b>Schedule 2 criteria</b>, candidates must have:</p>                            <ul>                              <li>An occupation on the WASMOL.</li>                              <li>Competent English.</li>                              <li>At least 6-months full-time contract of employment in Western Australia (only applicable for Subclass <b>190</b> visa).</li>                            </ul>                            <p><b>WA Graduates</b> must have:</p>                            <ul>                              <li>An occupation on the Graduate occupation list.</li>                              <li>Studied at an accredited Western Australian educational institution, full-time and face-to-face, for at least two years.</li>                              <li>Gained a university or higher education qualification or a VET qualification in Western Australia.</li>                              <li>Competent English.</li>                            </ul>                            <h5 style='padding:10px 0px;'>Links</h5>                            <ul style='padding-bottom:20px;'>                              <li><a href='https://www.migration.wa.gov.au/services/skilled-migration-western-australia/wa-state-nomination-combined-occupation-list' target='_blank' rel='noopener'>WA State Nomination - Combined occupation list</a> <i class='icon-tiny fa fa-external-link'></i></li>                            </ul>                              <div style='background-color:#ddecff94;padding: 10px 20px; border-radius: 5px; margin-top:20px;'>    <div class='wpb_wrapper'>      <div class='iwithtext'>        <div class='iwt-icon'> <i class='icon-default-style fa fa-info-circle extra-color-1'></i> </div>        <div class='iwt-text'> The above is a summary of key/essential eligibility criteria; it is not an exhaustive list of requirements. You are encouraged to check all criteria on the relevant State/Territory website.</div>        <div class='clear'></div>      </div>    </div>  </div>                          </div>                        </div>                        ",
      territory: {
        abv: 'WA',
        title: {
          en: 'Western Australia',
        },
      },
    },
  ],
  title: {
    en: 'Health and Welfare Services Managers nec ',
  },
  visa_option_section: [
    {
      _key: '19e0a90e189a',
      _type: 'visa_option_obj',
      types: {
        _ref: '559cb990c9dffd8675f6bc2186971dc2',
        _type: 'reference',
        _weak: true,
      },
    },
    {
      _key: '19e0a90e189a',
      _type: 'visa_option_obj',
      types: {
        _ref: 'cfecdb276f634854f3ef915e2e980c31',
        _type: 'reference',
        _weak: true,
      },
    },
  ],
  similarOccupations: [
    {
      _id: '17fbbc714d6f29ee94b7f4918be475b2',
      anzsco_section: {
        description: {
          en: 'Plans, organises, controls, coordinates and performs farming operations to breed and raise fish and other aquatic stock.',
        },
        unit_group: {
          tasks: {
            en: [
              'Planning and coordinating the operation of hatcheries to produce fish fry, seed oysters, crayfish, marron and prawns taking into account environmental and market factors',
              'Monitoring the environment to maintain optimal growing conditions',
              'Identifying and controlling environmental toxins and diseases',
              'Monitoring stock growth rates to determine when to harvest',
              'Transporting fish, crayfish, marron, prawns and sticks of seed oysters to new tanks, ponds, cages and floating net pens',
              'Directing and overseeing the harvesting, grading and packaging of fish, oysters and other aquatic stock',
              'Organising the sale, purchase and transportation of fish stock',
              'Maintaining and evaluating records of farming activities, monitoring market activity and planning production accordingly',
              'Managing business capital including budgeting, taxation, debt and loan management',
              'May select, train and supervise staff and contractors',
            ],
          },
        },
      },
      code: 121111,
      slug: {
        _type: 'slug',
        current: 'aquaculture-farmer',
      },
      title: {
        en: 'Aquaculture Farmer ',
      },
    },
  ],
};
