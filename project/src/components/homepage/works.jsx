import React from "react";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://ui-avatars.com/api/?name=Singularity&background=random"
								alt="Singularity"
								className="work-image"
							/>
							<div className="work-title">Singularity Software</div>
							<div className="work-subtitle">
								Senior Full-Stack Software Engineer
							</div>
							<div className="work-duration">08/2021 - Present</div>
						</div>

						<div className="work">
							<img
								src="https://ui-avatars.com/api/?name=Esfa&background=random"
								alt="Esfa Grup"
								className="work-image"
							/>
							<div className="work-title">Esfa Grup</div>
							<div className="work-subtitle">
								IT Management
							</div>
							<div className="work-duration">06/2021 - 08/2021</div>
						</div>

						<div className="work">
							<img
								src="https://ui-avatars.com/api/?name=Orgino&background=random"
								alt="Orgino Medya"
								className="work-image"
							/>
							<div className="work-title">Orgino Medya</div>
							<div className="work-subtitle">
								Junior Software Developer
							</div>
							<div className="work-duration">07/2019 - 09/2019</div>
						</div>
					</div>
				}
			/>

			<div style={{ marginTop: "30px" }}>
				<Card
					icon={faGraduationCap}
					title="Education"
					body={
						<div className="works-body">
							<div className="work">
								<img
									src="https://ui-avatars.com/api/?name=Nisantasi&background=random"
									alt="Nisantasi University"
									className="work-image"
								/>
								<div className="work-title">Nisantasi University</div>
								<div className="work-subtitle">
									Computer Science (Bachelor's)
								</div>
								<div className="work-duration">10/2021 - 02/2025</div>
							</div>

							<div className="work">
								<img
									src="https://ui-avatars.com/api/?name=Maribor&background=random"
									alt="University of Maribor"
									className="work-image"
								/>
								<div className="work-title">University of Maribor</div>
								<div className="work-subtitle">
									Erasmus Exchange
								</div>
								<div className="work-duration">02/2023 - 07/2023</div>
							</div>

							<div className="work">
								<img
									src="https://ui-avatars.com/api/?name=Nisantasi&background=random"
									alt="Nisantasi University"
									className="work-image"
								/>
								<div className="work-title">Nisantasi University</div>
								<div className="work-subtitle">
									Software Engineering (Bachelor's)
								</div>
								<div className="work-duration">07/2020 - 07/2024</div>
							</div>
						</div>
					}
				/>
			</div>
		</div>
	);
};

export default Works;
