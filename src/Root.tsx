import {
  SimpleGrid,
  Card,
  CardSection,
  Title,
  Table,
  Text,
} from "@mantine/core";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "./client";

const Root = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  useEffect(() => {
    const getProjects = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select(
          "id, name, description, budgeted, cost_cents, location (id, name)"
        );
      setProjects(data as Project[]);
    };
    getProjects();
  }, []);

  return (
    <SimpleGrid cols={2}>
      {projects.map((project) => (
        <Card>
          <CardSection>
            <Link to={`/projects/${project.id}`}>
              <Text fz="lg" fw={600}>
                {project.name}
              </Text>
            </Link>
            <Text c="dimmed">{project.description}</Text>
          </CardSection>
          <CardSection>
            <span>{`${project.cost_cents}`}</span>
          </CardSection>
          <CardSection>
            <span>{`${project.due_at}`}</span>
          </CardSection>
          <CardSection>
            <Link to={`/locations/${project.location.id}`}>
              {project.location.name}
            </Link>
          </CardSection>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default Root;
